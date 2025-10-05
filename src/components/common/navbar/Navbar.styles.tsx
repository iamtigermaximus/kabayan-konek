"use client";

import styled from "styled-components";
import { breakpoints as bp } from "../../../utils/layout";
import Link from "next/link";

export const HeroSection = styled.div`
  position: relative;
  width: 100%;
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
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
  gap: 12px;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 8px 16px;
  z-index: 100;

  @media (max-width: ${bp.md}) {
    display: none;
  }
`;

export const MenuLink = styled(Link)`
  color: #101010;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;

  &:hover {
    color: tomato;
  }

  @media (min-width: ${bp.md}) {
    /* font-size: 1.1rem; */
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
  background-color: rgba(255, 255, 255, 0.85);
  padding: 5px;
  z-index: 100;

  span {
    width: 25px;
    height: 3px;
    background-color: black;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

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
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease;
  z-index: 1000;
  gap: 15px;
  overflow-y: auto;

  @media (min-width: ${bp.md}) {
    display: none;
  }
`;

export const SidebarMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  gap: 5px;
`;

export const SidebarLink = styled(Link)`
  color: #636363;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  padding: 1px 0;
  text-align: left;

  &:hover {
    color: tomato;
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

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
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 999;

  @media (min-width: ${bp.md}) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  margin-bottom: 100px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  z-index: 100;

  @media (min-width: ${bp.md}) {
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const SidebarLogoContainer = styled.div`
  margin-bottom: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;

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
  margin-bottom: 10px;
  z-index: 10;
  position: relative;
`;

export const LoginButton = styled.button`
  margin-right: 10px;
  width: 100px;
  padding: 8px;
  background-color: tomato;
  color: white;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  position: relative;

  &:hover {
    background-color: #e64a19;
  }

  @media (min-width: ${bp.md}) {
    margin-right: 20px;
  }
`;

export const AccountStyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: block;
  padding: 8px 0;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const AccountDropdownContainer = styled.div``;

export const AccountLogoutButton = styled.button`
  display: block;
  width: 100%;
  color: black;
  border: none;
  cursor: pointer;
  padding: 8px;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 2000;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2001;
  border-radius: 4px;
  padding: 10px;
  margin-top: 5px;
`;

export const DropdownMenuItem = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  strong {
    display: block;
    margin-bottom: 5px;
    color: #333;
    font-size: 0.9em;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  a {
    padding: 4px 8px;
    color: #555;
    text-decoration: none;
    border-radius: 3px;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f5f5f5;
      color: #000;
    }
  }
`;

export const SidebarDropdown = styled.div`
  margin: 0;
  position: relative;
  z-index: 1001;
  width: 100%;
`;

export const SidebarDropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* padding: 8px 0; */
  cursor: pointer;
  color: #636363;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: left;

  &:hover {
    color: tomato;
  }
`;

export const SidebarDropdownSubMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 6px 0;
  cursor: pointer;
  color: #636363;
  /* color: red; */
  font-size: 1.1rem;
  font-weight: bold;
  text-align: left;

  &:hover {
    color: tomato;
  }
`;

export const SidebarDropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 2px;
  width: 100%;
  margin-left: 5px;

  a {
    padding: px;
    color: #555;
    /* color: green; */
    text-decoration: none;
    border-radius: 3px;
    width: 100%;
    text-align: left;
    font-size: 1rem;
    box-sizing: border-box;

    &:hover {
      background-color: #f5f5f5;
      color: tomato;
    }
  }
`;

export const DropdownArrow = styled.span<{ isOpen: boolean }>`
  margin-left: 5px;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
  font-size: 0.7em;
  display: inline-block;
`;

export const SubMenuLink = styled(Link)`
  display: block;
  padding: 8px 25px;
  color: #555;
  text-decoration: none;
  font-size: 0.9em;
  transition: text-decoration 0.2s ease;

  &:hover {
    /* text-decoration: underline; */
    color: tomato;
  }
`;

export const SidebarSubMenuLink = styled(Link)`
  display: block;
  /* padding: 8px 25px; */
  color: #555;
  text-decoration: none;
  font-size: 10px;
  transition: text-decoration 0.2s ease;

  &:hover {
    text-decoration: underline;
    color: tomato;
  }
`;
