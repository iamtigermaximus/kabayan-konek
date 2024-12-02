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

interface AdvertisementBannerProps {
  handleLoginClick: () => void; // Function to trigger login/signup
  toggleModal: () => void; // Function to toggle event creation modal
}

const AdvertisementBanner: FC<AdvertisementBannerProps> = ({
  handleLoginClick,
  toggleModal,
}) => {
  const { data: session } = useSession();

  return (
    <Container>
      {!session ? (
        <BannerContainer>
          <BannerHeading>Want to post your own advertisement?</BannerHeading>
          <BannerSubheading>
            Log in or sign up to create and manage your advertisements easily.
          </BannerSubheading>
          <LoginButton onClick={handleLoginClick}>
            Log In or Sign Up
          </LoginButton>
        </BannerContainer>
      ) : (
        <BannerContainer>
          <BannerHeading>
            Ready to share your advertisement with the Filipino community in
            Finland?
          </BannerHeading>
          <BannerSubheading style={{ marginBottom: '20px', color: '#555' }}>
            You are logged in! Create and manage your ads, and reach more
            potential customers.
          </BannerSubheading>
          <CreateButton onClick={() => toggleModal()}>
            CREATE ADVERTISEMENT
          </CreateButton>
        </BannerContainer>
      )}
    </Container>
  );
};

export default AdvertisementBanner;
