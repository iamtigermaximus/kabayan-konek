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

const KabayanBanner = ({}) => {
  return (
    <Container>
      <BannerContainer>
        <BannerHeading>
          <strong>Kabayan Konek:</strong> Are you a Kabayan or a Filipino family
          in Finland?
        </BannerHeading>
        <BannerSubheading>
          Share your stories, recommend someone, or let us know if you&apos;d
          like to be featured!
        </BannerSubheading>
        <CreateButton href="mailto:contact@yourwebsite.com?subject=Feature%20Request&body=Hello,%20I%20am%20interested%20in%20sharing%20a%20story,%20recommending%20someone,%20or%20getting%20featured.%20Here%20are%20the%20details:%20">
          CONTACT US
        </CreateButton>
      </BannerContainer>
    </Container>
  );
};

export default KabayanBanner;
