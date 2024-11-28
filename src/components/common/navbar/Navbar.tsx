'use client';

import React, { useState } from 'react';
import Image1 from '../../../assets/pinoy-konek.jpg';
import LogoImage from '../../../assets/kabayan-konek-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import {
  HeroSection,
  MenuContainer,
  MenuLink,
  BurgerMenu,
  Sidebar,
  CloseButton,
  SidebarLogoContainer,
  Backdrop,
  TextOverlayContainer,
  LogoContainer,
  TextOverlay,
  LoginButtonContainer,
  LoginButton,
} from './Navbar.styles';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleLogoutClick = () => {
    signOut({ callbackUrl: '/' });
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggle the dropdown visibility
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
        <MenuLink href="/marketplace">Marketplace</MenuLink>
        <MenuLink href="/advertisement">Advertisement</MenuLink>
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
          <Link href="/marketplace" onClick={toggleSidebar}>
            Marketplace
          </Link>
          <Link href="/advertisement" onClick={toggleSidebar}>
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
      <LoginButtonContainer>
        {session ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* User's Name */}
            <div style={{ width: '100%' }}>
              Logged in as {session.user?.name}.
            </div>

            {/* Dropdown for logged-in user */}
            <div>
              <LoginButton
                onClick={toggleDropdown}
                // style={{
                //   padding: '10px 20px',
                //   backgroundColor: 'purple',
                //   color: 'white',
                //   border: 'none',
                //   borderRadius: '4px',
                //   cursor: 'pointer',
                //   width: '200px',
                //   whiteSpace: 'nowrap',
                // }}
              >
                My account
              </LoginButton>
              {dropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '40px',
                    right: '0',
                    left: '50',
                    backgroundColor: 'white',
                    zIndex: 10,
                    padding: '10px',
                    marginRight: '20px',
                    border: '.5px solid gray',
                  }}
                >
                  <Link
                    href="/marketplace/myProducts"
                    style={{
                      display: 'block',
                      padding: '8px 0',
                      fontSize: '14px',
                    }}
                  >
                    View My Products
                  </Link>
                  <Link
                    href="/advertisement/myAdvertisements"
                    style={{
                      display: 'block',
                      padding: '8px 0',
                      fontSize: '14px',
                    }}
                  >
                    View My Advertisements
                  </Link>
                  <button
                    onClick={handleLogoutClick}
                    style={{
                      display: 'block',
                      width: '100%',
                      color: 'black',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '8px',
                    }}
                  >
                    LOG OUT
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          // If not authenticated, show login button
          <LoginButton onClick={handleLoginClick}>LOGIN</LoginButton>
        )}
      </LoginButtonContainer>
    </HeroSection>
  );
};

export default Navbar;
