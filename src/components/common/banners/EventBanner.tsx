'use client';

import React, { FC } from 'react';
import { useSession } from 'next-auth/react';

import styled from 'styled-components';

export const Container = styled.div``;

export const BannerContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  background-color: #e6f7ff;
`;

export const BannerHeading = styled.h2`
  margin-bottom: 10px;
`;

export const BannerSubheading = styled.p`
  margin-bottom: 20px;
  color: #555;
`;

export const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #222;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const CreateButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

interface EventBannerProps {
  handleLoginClick: () => void; // Function to trigger login/signup
  toggleModal: () => void; // Function to toggle event creation modal
}

const EventBanner: FC<EventBannerProps> = ({
  handleLoginClick,
  toggleModal,
}) => {
  const { data: session } = useSession();

  return (
    <Container>
      {!session ? (
        <BannerContainer>
          <BannerHeading>Want to post your own events?</BannerHeading>
          <BannerSubheading>
            Log in or sign up to create and manage your events with ease. Join
            our community today!
          </BannerSubheading>
          <LoginButton onClick={handleLoginClick}>
            Log In or Sign Up
          </LoginButton>
        </BannerContainer>
      ) : (
        // If the user is logged in, show "Create an Event" button
        <BannerContainer>
          <BannerHeading>
            Ready to share your events with the community?
          </BannerHeading>
          <BannerSubheading>
            You are logged in! Create and manage your events easily, and engage
            with your audience.
          </BannerSubheading>
          <CreateButton onClick={toggleModal}>CREATE AN EVENT</CreateButton>
        </BannerContainer>
      )}
    </Container>
  );
};

export default EventBanner;
