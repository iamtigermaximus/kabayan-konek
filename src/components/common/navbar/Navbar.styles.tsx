import styled from 'styled-components';
import { breakpoints as bp } from '../../../utils/layout';
import Link from 'next/link';

export const HeroSection = styled.div`
  position: relative;
  width: 100vw;
  height: 200px;
  z-index: 0;

  @media (min-width: ${bp.md}) {
    height: 350px;
  }
`;

export const TextOverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const TextOverlay = styled.div`
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

export const MenuContainer = styled.div`
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

export const MenuLink = styled(Link)`
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
    font-size: 1.1rem;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 1.5rem;
  }
`;

export const BurgerMenu = styled.div`
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

export const Sidebar = styled.div<{ isOpen: boolean }>`
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

export const CloseButton = styled.button`
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

export const Backdrop = styled.div<{ isOpen: boolean }>`
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

export const LogoContainer = styled.div`
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

export const SidebarLogoContainer = styled.div`
  margin-bottom: 10px;

  @media (min-width: ${bp.md}) {
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const LoginButtonContainer = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: flex-end;
`;

export const LoginButton = styled.button`
  margin-right: 10px;
  width: 100px;
  padding: 2px 8px;
  background-color: tomato;
  color: white;
  cursor: pointer;
  border: none;

  @media (min-width: ${bp.md}) {
    margin-right: 20px;
  }
`;
