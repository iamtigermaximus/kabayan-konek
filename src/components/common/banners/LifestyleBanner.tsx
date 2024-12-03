'use client';

import React from 'react';
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

export const CreateButton = styled.a`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
`;

const LifestyleBanner = ({}) => {
  return (
    <Container>
      <BannerContainer>
        <BannerHeading>
          <strong>Kabayan Konek:</strong> Are you a Kabayan with a story to tell
          or an article idea to share?
        </BannerHeading>
        <BannerSubheading>
          We&apos;re looking for contributors! Send us your articles and be part
          of our community.
        </BannerSubheading>
        <CreateButton href="mailto:contact@kabayankonek.com?subject=Article%20Contribution&body=Hello,%20I%20would%20like%20to%20contribute%20an%20article.%20Here%20are%20the%20details:%20">
          SEND YOUR ARTICLE
        </CreateButton>
      </BannerContainer>
    </Container>
  );
};

export default LifestyleBanner;
