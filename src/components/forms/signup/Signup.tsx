'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  Container,
  ErrorContainer,
  // EyeIcon,
  Input,
  InputContainer,
  InputForm,
  InputLabel,
  ProviderButton,
  ProviderContainer,
  ProviderIcon,
  Providers,
  SignUpButton,
  SignUpButtonContainer,
  SignUpContainer,
  SignUpTitle,
  SignUpTitleContainer,
} from './Signup.styles';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
// import { FaLinkedin } from 'react-icons/fa6';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';

const signupSchema = z.object({
  name: z
    .string()
    .min(1, 'Full name is required')
    .min(5, 'Please enter your full name')
    .max(255, 'Full name should not exceed 255 characters'),

  email: z.string().min(1, 'Email is required').max(255).email('Invalid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
      'Password must contain at least one number, one uppercase letter, and one lowercase letter'
    ),
});

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const router = useRouter();
  // const [showPassword, setShowPassword] = useState(false);
  const [displayError, setDisplayError] = useState('');

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (
    data: z.infer<typeof signupSchema>
  ) => {
    try {
      signupSchema.parse(data);

      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      if (response.ok) {
        const loginResponse = await signIn('credentials', {
          redirect: false,
          email: data.email,
          password: data.password,
        });

        if (loginResponse?.ok) {
          router.push('/about');
        } else {
          console.error('Automatic login failed.');
        }
      } else {
        const errorData = await response.json();
        if (errorData.message === 'Email already exists') {
          setError('email', {
            type: 'manual',
            message:
              'An account with this email already exists. Please log in.',
          });
          setDisplayError(
            'An account with this email already exists. Please log in.'
          );
        } else {
          console.error('Registration failed:', errorData.message);
          setDisplayError(
            'An account with this email already exists. Please log in.100'
          );
          setTimeout(() => {
            setDisplayError('');
          }, 5000);
        }
      }

      reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((validationError) => {
          setError(validationError.path[0] as keyof FormData, {
            type: 'manual',
            message: validationError.message,
          });
        });
      } else {
        console.error('Unexpected error:', error);
        setDisplayError('Unexpected error occurred. Please try again.');
      }
    }
  };

  const loginWithGoogle = () => signIn('google', { callbackUrl: '/about' });

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  const handleInputChange = (field: keyof FormData) => {
    setError(field, { type: 'manual', message: '' });
    setDisplayError('');
  };
  return (
    <Container>
      <SignUpContainer>
        <InputForm onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <SignUpTitleContainer>
              <SignUpTitle>SIGN UP</SignUpTitle>
            </SignUpTitleContainer>
            <InputLabel>Fullname</InputLabel>
            <Input
              type="text"
              placeholder="Enter fullname"
              {...register('name', { required: 'Full name is required' })}
              defaultValue=""
              onChange={() => handleInputChange('name')}
            />
            {errors.name && (
              <ErrorContainer>{errors.name.message}</ErrorContainer>
            )}
            <InputLabel>Email</InputLabel>
            <Input
              type="email"
              placeholder="Enter email"
              {...register('email', {
                required: 'Email is required',
                maxLength: 255,
                pattern: /^\S+@\S+$/i,
              })}
              defaultValue=""
              onChange={() => handleInputChange('email')}
            />
            {errors.email && (
              <ErrorContainer>{errors.email.message}</ErrorContainer>
            )}
            <InputLabel>Password</InputLabel>
            <div>
              <Input
                // type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                {...register('password', {
                  required: 'Password is required',
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
                    message:
                      'Password must contain at least one number, one uppercase letter, and one lowercase letter',
                  },
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters long',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Password should not exceed 50 characters',
                  },
                })}
                defaultValue=""
                onChange={() => handleInputChange('password')}
              />
              {/* <EyeIcon onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </EyeIcon> */}
            </div>

            {errors.password && (
              <ErrorContainer>{errors.password.message}</ErrorContainer>
            )}
            <SignUpButtonContainer>
              <SignUpButton type="submit">Submit</SignUpButton>
            </SignUpButtonContainer>
            {displayError && <ErrorContainer>{displayError}</ErrorContainer>}
          </InputContainer>
        </InputForm>
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
      </SignUpContainer>
    </Container>
  );
};

export default SignUp;
