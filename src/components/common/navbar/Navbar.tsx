'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image1 from '../../../assets/pinoy-konek.jpg';
import LogoImage from '../../../assets/kabayan-konek-logo.png';

import Image from 'next/image';
import { breakpoints as bp } from '../../../utils/layout';
import Link from 'next/link';

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

const Sidebar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: left 0.3s ease;
  z-index: 1000;
  gap: 20px;

  a {
    color: #636363;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: bold;
    &:hover {
      color: tomato;
    }
  }

  @media (min-width: ${bp.md}) {
    display: none;
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

const Backdrop = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 999;

  @media (min-width: ${bp.md}) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  /* z-index: 99; */
  top: 20px;
  margin-bottom: 100px;

  @media (min-width: ${bp.md}) {
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const SidebarLogoContainer = styled.div`
  margin-bottom: 10px;

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

  const closeSidebar = () => {
    setSidebarOpen(false);
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

      <Sidebar isOpen={sidebarOpen}>
        <CloseButton onClick={toggleSidebar}>&times;</CloseButton>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <SidebarLogoContainer>
            <Image src={LogoImage} alt="logo" width={150} height={70} />
          </SidebarLogoContainer>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
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
        </div>
      </Sidebar>

      <Backdrop isOpen={sidebarOpen} onClick={closeSidebar} />

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
