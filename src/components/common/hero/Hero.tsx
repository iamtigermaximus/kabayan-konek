'use client';
import React from 'react';
import styled from 'styled-components';
import Image1 from '../../../assets/pinoy-konek.jpg';
import Image from 'next/image';

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  text-align: center;
  color: white;
  width: 100%;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Image
        src={Image1}
        layout="fill"
        objectFit="contain"
        alt="hero-image"
        priority
      />
    </HeroSection>
  );
};

export default Hero;
