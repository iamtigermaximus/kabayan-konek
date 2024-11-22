'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { z } from 'zod';
import {
  Container,
  LoginContainer,
  InputContainer,
  LoginTitleContainer,
  LoginTitle,
  InputLabel,
  Input,
  ForgotPasswordContainer,
  ForgotPasswordLink,
  SignInButtonContainer,
  SignInButton,
  CreateAccountContainer,
  CreateAccountTitle,
  CreateAccountButton,
  ErrorContainer,
  ProviderContainer,
  Providers,
  ProviderButton,
  ProviderIcon,
  CreateAccountButtonContainer,
} from './Login.styles';
import { useSearchParams, useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { zodResolver } from '@hookform/resolvers/zod';

const credentialsSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have more than 8 characters')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter'),
});

interface Credentials {
  email: string;
  password: string;
}

const LoginPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') ?? '/about';

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof credentialsSchema>>({
    resolver: zodResolver(credentialsSchema),
  });

  const onSubmit: SubmitHandler<Credentials> = async (
    data: z.infer<typeof credentialsSchema>
  ) => {
    try {
      credentialsSchema.parse(data);

      const response = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl,
      });

      if (response?.error) {
        setError('email', {
          type: 'manual',
          message:
            'We cannot find an account with that email address. Please check your entry or create a new account.',
        });
      } else {
        router.push(callbackUrl);
      }
    } catch (error) {
      setError('email', { type: 'manual', message: 'Unexpected error' });
      console.error('Unexpected error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <LoginTitleContainer>
          <LoginTitle>LOG IN</LoginTitle>
        </LoginTitleContainer>
        <InputLabel>Email</InputLabel>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              type="email"
              name="email"
              placeholder="Enter email"
              value={field.value || ''}
              onChange={field.onChange}
            />
          )}
        />
        {errors.email && (
          <ErrorContainer>{errors.email.message}</ErrorContainer>
        )}
        <InputLabel>Password</InputLabel>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <div>
              <Input
                name="password"
                placeholder="Enter password"
                value={field.value || ''}
                onChange={field.onChange}
              />
            </div>
          )}
        />

        {errors.password && (
          <ErrorContainer>{errors.password.message}</ErrorContainer>
        )}
      </InputContainer>
      <ForgotPasswordContainer>
        <Link href={'/'}>
          <ForgotPasswordLink>Forgot password?</ForgotPasswordLink>
        </Link>
      </ForgotPasswordContainer>
      <SignInButtonContainer>
        <SignInButton type="submit">Log in</SignInButton>
      </SignInButtonContainer>
    </form>
  );
};

const Login = () => {
  const loginWithGoogle = () => signIn('google', { callbackUrl: '/about' });

  return (
    <Container>
      <LoginContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginPageContent />
        </Suspense>
        <Providers>
          <ProviderContainer>
            <ProviderButton onClick={loginWithGoogle}>
              <ProviderIcon>
                <FcGoogle />
              </ProviderIcon>
              Google
            </ProviderButton>
          </ProviderContainer>
        </Providers>
        <CreateAccountContainer>
          <CreateAccountTitle>No account yet?</CreateAccountTitle>
        </CreateAccountContainer>
        <CreateAccountButtonContainer>
          <Link href={'/signup'}>
            <CreateAccountButton>Create account</CreateAccountButton>
          </Link>
        </CreateAccountButtonContainer>
      </LoginContainer>
    </Container>
  );
};

export default Login;
