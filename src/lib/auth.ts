import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'bcrypt';
import prisma from './prisma';

type AuthenticatedUser = {
  id: string;
  email: string;
  role: string;
};

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter password',
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error('Missing email or password');
        }

        const existingUser = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!existingUser) {
          throw new Error(
            "We can't find an account with that email address. Please check your entry or create a new account."
          );
        }

        // Check if password exists and is a string
        if (
          !existingUser.password ||
          typeof existingUser.password !== 'string'
        ) {
          throw new Error('Invalid password');
        }

        // Ensure credentials.password is a string before comparing
        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );

        if (!passwordMatch) {
          throw new Error(
            'The password you entered is incorrect. Please try again.'
          );
        }

        // Return user data excluding the password field
        return {
          id: existingUser.id,
          email: existingUser.email,
          name: existingUser.name,
          role: existingUser.role,
        } as AuthenticatedUser;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          // If user doesn't exist, create a new user for OAuth (Google)
          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: user.image,
              role: 'user', // Default role for new users
              // No password needed for OAuth users
            },
          });
        } else {
          // If user exists, link the Google account to the existing user (if not already linked)
          const existingAccount = await prisma.account.findFirst({
            where: {
              userId: existingUser.id,
              provider: account.provider,
            },
          });

          if (!existingAccount) {
            await prisma.account.create({
              data: {
                userId: existingUser.id,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                type: account.type,
                access_token: account.access_token,
                refresh_token: account.refresh_token,
                expires_at: account.expires_at,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
                session_state: account.session_state,
              },
            });
          }
        }
      }
      return true;
    },

    async redirect({ url, baseUrl }) {
      // Ensure the callback URL is the same as the redirect URL in production
      if (url.startsWith(baseUrl)) {
        return url; // redirect to the callback URL passed by NextAuth
      }
      return baseUrl; // fallback to home page if any invalid URL is passed
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
        session.user.name = token.name as string;
      }
      return session;

      // return {
      //   ...session,
      //   user: {
      //     ...session.user,
      //     id: token.id as string,
      //     role: token.role as string,
      //     session.user.name = token.name as string
      //   },
      // };
    },
  },
};
