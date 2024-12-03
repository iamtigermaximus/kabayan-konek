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

const HomeBanner = ({}) => {
  return (
    <Container>
      <BannerContainer>
        <BannerHeading>
          <strong>Kabayan Konek:</strong> Your Community Tambayan in Finland
        </BannerHeading>
        <BannerSubheading>
          Share your stories, post events, explore the marketplace, or advertise
          with us—connect with the Filipino community today!
        </BannerSubheading>
      </BannerContainer>
    </Container>
  );
};

export default HomeBanner;
