'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { breakpoints as bp } from '../../../utils/layout';
import LogoImage from '../../../assets/kabayankonek.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 20px 50px;
  text-align: center;

  @media (min-width: ${bp.md}) {
    text-align: left;
    padding: 40px 50px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${bp.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Section = styled.div`
  flex: 1;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin: 5px 0;

    a {
      text-decoration: none;
      color: #fff;

      &:hover {
        color: tomato;
      }
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.25rem;

    &:hover {
      color: tomato;
    }
  }

  @media (min-width: ${bp.md}) {
    justify-content: flex-start;
  }
`;

const Copyright = styled.div`
  margin-top: 20px;
  font-size: 0.875rem;
  text-align: center;
  color: #aaa;

  @media (min-width: ${bp.md}) {
    text-align: center;
    margin-top: 40px;
  }
`;
const LogoContainer = styled.div``;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <LogoContainer>
            <Image src={LogoImage} alt="logo" width={200} height={80} />
          </LogoContainer>
          <p
            style={{
              fontSize: '14px',
            }}
          >
            Connecting Filipinos in Finland
          </p>
        </Section>
        <Section>
          <h4>Quick Links</h4>
          <NavLinks>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/lifestyle">Lifestyle</Link>
            </li>
            <li>
              <Link href="/profile">Kabayan Spotlight</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>{' '}
            <li>
              <Link href="/market">Marketplace</Link>
            </li>{' '}
            <li>
              <Link href="/advertise">Advertisement</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </NavLinks>
        </Section>
        <Section>
          <h4>Follow Us</h4>
          <SocialMedia>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </SocialMedia>
          <div style={{ color: 'white', cursor: 'pointer', padding: '5px 0' }}>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:contact@kabayankonek.com?subject=Inquiry%20from%20About%20Page&body=Hello,%20I%20have%20a%20question..."
              style={{
                color: 'white',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              contact@kabayankonek.com
            </a>
          </div>
        </Section>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()}{' '}
        <strong style={{ color: 'tomato' }}>kabayankonek</strong>. All Rights
        Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
