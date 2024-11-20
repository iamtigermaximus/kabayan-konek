'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image1 from '../../../assets/pinoy-konek.jpg';
import LogoImage from '../../../assets/kabayan-konek-logo.png';

import Image from 'next/image';
import { breakpoints as bp } from '../../../utils/layout';
import Link from 'next/link';

interface SidebarProps {
  $isOpen: boolean;
}

const HeroSection = styled.div`
  position: relative;
  width: 100vw;
  height: 200px;
  z-index: 0;

  @media (min-width: ${bp.md}) {
    height: 350px;
  }
`;

const TextOverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  white-space: nowrap;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  z-index: 99;

  @media (min-width: ${bp.sm}) {
    font-size: 1.75rem;
  }

  @media (min-width: ${bp.md}) {
    font-size: 2rem;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 3rem;
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;

  @media (max-width: ${bp.md}) {
    display: none;
  }
`;

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  white-space: nowrap;
  font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;

  &:hover {
    color: lightblue;
  }

  @media (min-width: ${bp.md}) {
    font-size: 1.25rem;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 1.5rem;
  }
`;

const BurgerMenu = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background-color: white;
    border-radius: 2px;
  }
  z-index: 100;

  @media (max-width: ${bp.md}) {
    display: flex;
  }
`;

const Sidebar = styled.div<SidebarProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  width: 250px;
  height: 100vh;
  background-color: white;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: left 0.3s ease;
  z-index: 2000;
  border-right: 1px rgba(0, 0, 0, 0.7);

  a {
    color: #636363;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: bold;

    &:hover {
      color: lightblue;
    }
  }
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: lightblue;
  }
`;

const Backdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  z-index: 99;
`;

const LogoContainer = styled.div`
  position: absolute;
  z-index: 99;
  top: 20px;

  @media (min-width: ${bp.md}) {
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <HeroSection>
      <Image
        src={Image1}
        alt="hero-image"
        priority
        fill
        style={{ objectFit: 'cover' }}
      />

      <MenuContainer>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/lifestyle">Lifestyle</MenuLink>
        <MenuLink href="/profile">Kabayan</MenuLink>
        <MenuLink href="/news">News</MenuLink>
        <MenuLink href="/events">Events</MenuLink>
        <MenuLink href="/market">Marketplace</MenuLink>
        <MenuLink href="/advertise">Advertisement</MenuLink>
      </MenuContainer>

      <BurgerMenu onClick={toggleSidebar}>
        <span />
        <span />
        <span />
      </BurgerMenu>

      <Sidebar $isOpen={sidebarOpen}>
        <LogoContainer>
          <Image src={LogoImage} alt="logo" width={150} height={70} />
        </LogoContainer>
        <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
        <Link href="/" onClick={toggleSidebar}>
          Home
        </Link>
        <Link href="/lifestyle" onClick={toggleSidebar}>
          Lifestyle
        </Link>
        <Link href="/profile" onClick={toggleSidebar}>
          Kabayan
        </Link>
        <Link href="/news" onClick={toggleSidebar}>
          News
        </Link>
        <Link href="/events" onClick={toggleSidebar}>
          Events
        </Link>
        <Link href="/market" onClick={toggleSidebar}>
          Marketplace
        </Link>
        <Link href="/advertise" onClick={toggleSidebar}>
          Advertisement
        </Link>
      </Sidebar>

      <Backdrop $isOpen={sidebarOpen} onClick={toggleSidebar} />

      <TextOverlayContainer>
        <LogoContainer>
          <Image src={LogoImage} alt="logo" width={250} height={100} />
        </LogoContainer>
        <TextOverlay>Connecting Filipinos in Finland</TextOverlay>
      </TextOverlayContainer>
    </HeroSection>
  );
};

export default Navbar;
