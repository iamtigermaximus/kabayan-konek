"use client";

import React, { useState } from "react";
import Image1 from "../../../assets/pinasredblue.jpg";
import LogoImage from "../../../assets/kabayankonek.png";
import Image from "next/image";
// import Link from "next/link";
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
  AccountDropdownContainer,
  AccountStyledLink,
  AccountLogoutButton,
  DropdownContainer,
  DropdownMenu,
  // DropdownMenuItem,
  SidebarDropdown,
  SidebarDropdownContent,
  SidebarDropdownHeader,
  DropdownArrow,
  SidebarDropdownSubMenuHeader,
  SidebarMenuContainer,
  SidebarLink,
  SubMenuLink,
  SidebarSubMenuLink,
} from "./Navbar.styles";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Desktop dropdown states - CLICK BASED
  const [learnFinnishOpen, setLearnFinnishOpen] = useState(false);
  const [desktopSubDropdown, setDesktopSubDropdown] = useState<string | null>(
    null
  );

  // Mobile sidebar dropdown states
  const [openMainDropdown, setOpenMainDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  const toggleMainDropdown = (dropdownName: string) => {
    setOpenMainDropdown(
      openMainDropdown === dropdownName ? null : dropdownName
    );
  };

  const toggleSubDropdown = (dropdownName: string) => {
    setOpenSubDropdown(openSubDropdown === dropdownName ? null : dropdownName);
  };

  // Desktop dropdown handlers - CLICK BASED
  const toggleDesktopMainDropdown = () => {
    setLearnFinnishOpen(!learnFinnishOpen);
    setDesktopSubDropdown(null); // Close subdropdown when main closes
  };

  const handleDesktopSubDropdown = (dropdownName: string) => {
    setDesktopSubDropdown(
      desktopSubDropdown === dropdownName ? null : dropdownName
    );
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setOpenMainDropdown(null);
    setOpenSubDropdown(null);
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleLogoutClick = () => {
    signOut({ callbackUrl: "/" });
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleCloseDropdown = () => {
    setDropdownOpen(false);
  };

  const firstName = session?.user?.name?.split(" ")[0];

  return (
    <HeroSection>
      <Image
        src={Image1}
        alt="hero-image"
        priority
        fill
        style={{ objectFit: "cover" }}
      />

      <BurgerMenu onClick={toggleSidebar}>
        <span />
        <span />
        <span />
      </BurgerMenu>

      <Sidebar isOpen={sidebarOpen}>
        <CloseButton onClick={closeSidebar}>&times;</CloseButton>

        {/* Logo - centered in sidebar */}
        <SidebarLogoContainer>
          <Image src={LogoImage} alt="logo" width={150} height={70} />
        </SidebarLogoContainer>

        {/* Menu container - centered in sidebar but left-aligned text */}
        <SidebarMenuContainer>
          <SidebarLink href="/" onClick={closeSidebar}>
            Home
          </SidebarLink>
          <SidebarLink href="/lifestyle" onClick={closeSidebar}>
            Lifestyle
          </SidebarLink>
          <SidebarLink href="/profile" onClick={closeSidebar}>
            Kabayan
          </SidebarLink>
          <SidebarLink href="/trends" onClick={closeSidebar}>
            Trends
          </SidebarLink>
          <SidebarLink href="/events" onClick={closeSidebar}>
            Events
          </SidebarLink>
          {/* <SidebarLink href="/marketplace" onClick={closeSidebar}>
            Marketplace
          </SidebarLink> */}
          <SidebarLink href="/advertisement" onClick={closeSidebar}>
            Advertisement
          </SidebarLink>

          {/* Opi Suomea dropdown - MOBILE */}
          <SidebarDropdown>
            <SidebarDropdownHeader onClick={() => toggleMainDropdown("suomea")}>
              Opi Suomea
              <DropdownArrow isOpen={openMainDropdown === "suomea"}>
                ▼
              </DropdownArrow>
            </SidebarDropdownHeader>
            <SidebarDropdownContent isOpen={openMainDropdown === "suomea"}>
              {/* Basics dropdown */}
              <div>
                <SidebarDropdownSubMenuHeader
                  onClick={() => toggleSubDropdown("basics")}
                >
                  Basics
                  <DropdownArrow isOpen={openSubDropdown === "basics"}>
                    ▼
                  </DropdownArrow>
                </SidebarDropdownSubMenuHeader>
                {openSubDropdown === "basics" && (
                  <div
                    style={{
                      marginLeft: "2px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                      textWrap: "nowrap",
                    }}
                  >
                    <SidebarSubMenuLink
                      href="/opi-suomea/basics/greetings"
                      onClick={closeSidebar}
                    >
                      Greetings
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/opi-suomea/basics/numbers-colors"
                      onClick={closeSidebar}
                    >
                      Numbers and Colors
                    </SidebarSubMenuLink>
                    {/* <SidebarSubMenuLink
                      href="/basics/days-months"
                      onClick={closeSidebar}
                    >
                      Days and Months
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/basics/time"
                      onClick={closeSidebar}
                    >
                      Time
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/basics/directions"
                      onClick={closeSidebar}
                    >
                      Directions
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/basics/personal-pronouns"
                      onClick={closeSidebar}
                    >
                      Personal Pronouns
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/basics/demonstrative-pronouns"
                      onClick={closeSidebar}
                    >
                      Demonstrative Pronouns
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/basics/interrogative-pronouns"
                      onClick={closeSidebar}
                    >
                      Interrogative Pronouns
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/basics/basic-verbs"
                      onClick={closeSidebar}
                    >
                      Basic Verbs
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/basics/adjectives"
                      onClick={closeSidebar}
                    >
                      Adjectives
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/basics/useful-words"
                      onClick={closeSidebar}
                    >
                      Useful Words
                    </SidebarSubMenuLink> */}
                  </div>
                )}
              </div>

              {/* Intermediate dropdown */}
              <div>
                {/* <SidebarDropdownSubMenuHeader
                  onClick={() => toggleSubDropdown("intermediate")}
                >
                  Intermediate
                  <DropdownArrow isOpen={openSubDropdown === "intermediate"}>
                    ▼
                  </DropdownArrow>
                </SidebarDropdownSubMenuHeader> */}
                {/* {openSubDropdown === "intermediate" && (
                  <div
                    style={{
                      marginLeft: "2px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                      // textWrap: "nowrap",
                    }}
                  >
                    <SidebarSubMenuLink
                      href="/intermediate/kpt"
                      onClick={closeSidebar}
                    >
                      KPT
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/intermediate/verbtypes-present"
                      onClick={closeSidebar}
                    >
                      Verb Types and Present Tense
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/intermediate/past-tense"
                      onClick={closeSidebar}
                    >
                      Past Tense
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/intermediate/perfect-tense"
                      onClick={closeSidebar}
                    >
                      Perfect Tense
                    </SidebarSubMenuLink>{" "}
                    <SidebarSubMenuLink
                      href="/intermediate/past-perfect-tense"
                      onClick={closeSidebar}
                    >
                      Past Perfect Tense
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/intermediate/partitive"
                      onClick={closeSidebar}
                    >
                      Partitive
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/intermediate/word-types"
                      onClick={closeSidebar}
                    >
                      Word Types
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/intermediate/passive"
                      onClick={closeSidebar}
                    >
                      Passive
                    </SidebarSubMenuLink>
                    <Link href="/intermediate/necessive" onClick={closeSidebar}>
                      Necessive
                    </Link>
                    <SidebarSubMenuLink
                      href="/intermediate/imperative"
                      onClick={closeSidebar}
                    >
                      Imperative
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/intermediate/object"
                      onClick={closeSidebar}
                    >
                      Object
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/intermediate/adverb"
                      onClick={closeSidebar}
                    >
                      Adverb
                    </SidebarSubMenuLink>
                  </div> 
                )}*/}
              </div>

              {/* Advanced dropdown */}
              <div>
                {/* <SidebarDropdownSubMenuHeader
                  onClick={() => toggleSubDropdown("advanced")}
                >
                  Advanced
                  <DropdownArrow isOpen={openSubDropdown === "advanced"}>
                    ▼
                  </DropdownArrow>
                </SidebarDropdownSubMenuHeader> */}
                {/* {openSubDropdown === "advanced" && (
                  <div
                    style={{
                      marginLeft: "2px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                      textWrap: "nowrap",
                    }}
                  >
                    <SidebarSubMenuLink
                      href="/advanced/business"
                      onClick={closeSidebar}
                    >
                      Business Finnish
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/advanced/literature"
                      onClick={closeSidebar}
                    >
                      Literature
                    </SidebarSubMenuLink>
                    <SidebarSubMenuLink
                      href="/advanced/idioms"
                      onClick={closeSidebar}
                    >
                      Idioms
                    </SidebarSubMenuLink>
                  </div>
                )} */}
              </div>
            </SidebarDropdownContent>
          </SidebarDropdown>
        </SidebarMenuContainer>
      </Sidebar>

      <Backdrop isOpen={sidebarOpen} onClick={closeSidebar} />

      <TextOverlayContainer>
        <LogoContainer>
          <Image src={LogoImage} alt="logo" width={250} height={100} />
        </LogoContainer>
        <TextOverlay>Connecting Filipinos in Finland</TextOverlay>
      </TextOverlayContainer>

      <MenuContainer>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/lifestyle">Lifestyle</MenuLink>
        <MenuLink href="/profile">Kabayan</MenuLink>
        <MenuLink href="/trends">Trends</MenuLink>
        <MenuLink href="/events">Events</MenuLink>
        {/* <MenuLink href="/marketplace">Marketplace</MenuLink> */}
        <MenuLink href="/advertisement">Advertisement</MenuLink>

        {/* Opi Suomea Dropdown - DESKTOP (Clean integrated design) */}
        <DropdownContainer>
          <MenuLink
            as="div"
            style={{ cursor: "pointer" }}
            onClick={toggleDesktopMainDropdown}
          >
            Opi Suomea
            <span style={{ fontSize: "0.8em", marginLeft: "5px" }}>
              {learnFinnishOpen ? "▼" : "▲"}
            </span>
            {/* <DropdownArrow isOpen={openMainDropdown === "suomea"}>
              ▼
            </DropdownArrow> */}
          </MenuLink>
          {learnFinnishOpen && (
            <DropdownMenu style={{ minWidth: "220px", padding: "10px 0" }}>
              {/* Basics Section - Clean integrated design */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    cursor: "pointer",
                    padding: "8px 15px",
                    color: "#333",
                    fontSize: "0.95em",
                  }}
                  onClick={() => handleDesktopSubDropdown("basics")}
                >
                  <strong>Basics</strong>
                  <span style={{ fontSize: "0.8em", marginLeft: "5px" }}>
                    {desktopSubDropdown === "basics" ? "▼" : "▶"}
                  </span>
                </div>
                {desktopSubDropdown === "basics" && (
                  <div
                    style={{
                      backgroundColor: "#f8f9fa",
                      margin: "5px 0",
                      borderRadius: "4px",
                    }}
                  >
                    <SubMenuLink href="/opi-suomea/basics/greetings">
                      Greetings
                    </SubMenuLink>
                    <SubMenuLink href="/opi-suomea/basics/numbers-colors">
                      Numbers and Colors
                    </SubMenuLink>
                    {/* <SubMenuLink href="/basics/days-months">
                      Days and Months
                    </SubMenuLink>
                    <SubMenuLink href="/basics/time">Time</SubMenuLink>
                    <SubMenuLink href="/basics/directions">
                      Directions
                    </SubMenuLink>
                    <SubMenuLink href="/basics/personal-pronouns">
                      Personal Pronouns
                    </SubMenuLink>
                    <SubMenuLink href="/basics/demonstrative-pronouns">
                      Demonstrative Pronouns
                    </SubMenuLink>
                    <SubMenuLink href="/basics/interrogative-pronouns">
                      Interrogative Pronouns
                    </SubMenuLink>
                    <SubMenuLink href="/basics/basic-verbs">
                      Basic Verbs
                    </SubMenuLink>
                    <SubMenuLink href="/basics/adjectives">
                      Adjectives
                    </SubMenuLink>
                    <SubMenuLink href="/basics/useful-words">
                      Useful Words
                    </SubMenuLink> */}
                  </div>
                )}
              </div>

              {/* Intermediate Section - Clean integrated design */}
              <div style={{ position: "relative" }}>
                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    cursor: "pointer",
                    padding: "8px 15px",
                    color: "#333",
                    fontSize: "0.95em",
                  }}
                  onClick={() => handleDesktopSubDropdown("intermediate")}
                >
                  <strong>Intermediate</strong>
                  <span style={{ fontSize: "0.8em", marginLeft: "10px" }}>
                    {desktopSubDropdown === "intermediate" ? "▼" : "▶"}
                  </span>
                </div> */}
                {/* {desktopSubDropdown === "intermediate" && (
                  <div
                    style={{
                      backgroundColor: "#f8f9fa",
                      margin: "5px 0",
                      borderRadius: "4px",
                    }}
                  >
                    <SubMenuLink href="/intermediate/kpt">KPT</SubMenuLink>
                    <SubMenuLink href="/intermediate/verbtypes-present">
                      Verb Types and Present Tense
                    </SubMenuLink>
                    <SubMenuLink href="/intermediate/past-tense">
                      Past Tense
                    </SubMenuLink>
                    <SubMenuLink href="/intermediate/perfect-tense">
                      Perfect Tense
                    </SubMenuLink>
                    <SubMenuLink href="/intermediate/past-perfect-tense">
                      Past Perfect Tense
                    </SubMenuLink>
                    <SubMenuLink href="/intermediate/partitive">
                      Partitive
                    </SubMenuLink>
                    <SubMenuLink href="/intermediate/word-types">
                      Word Types
                    </SubMenuLink>
                    <SubMenuLink href="/intermediate/passive">
                      Passive
                    </SubMenuLink>
                    <SubMenuLink href="/intermediate/necessive">
                      Necessive
                    </SubMenuLink>
                    <SubMenuLink href="/intermediate/imperative">
                      Imperative
                    </SubMenuLink>
                    <SubMenuLink href="/intermediate/object">
                      Object
                    </SubMenuLink>
                    <SubMenuLink href="/intermediate/adverb">
                      Adverb
                    </SubMenuLink>
                  </div>
                )} */}
              </div>

              {/* Advanced Section - Clean integrated design */}
              <div style={{ position: "relative" }}>
                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    cursor: "pointer",
                    padding: "8px 15px",
                    color: "#333",
                    fontSize: "0.95em",
                  }}
                  onClick={() => handleDesktopSubDropdown("advanced")}
                >
                  <strong>Advanced</strong>
                  <span style={{ fontSize: "0.8em", marginLeft: "10px" }}>
                    {desktopSubDropdown === "advanced" ? "▼" : "▶"}
                  </span>
                </div> */}
                {/* {desktopSubDropdown === "advanced" && (
                  <div
                    style={{
                      backgroundColor: "#f8f9fa",
                      margin: "5px 0",
                      borderRadius: "4px",
                    }}
                  >
                    <SubMenuLink href="/advanced/business">
                      Business Finnish
                    </SubMenuLink>
                    <SubMenuLink href="/advanced/literature">
                      Literature
                    </SubMenuLink>
                    <SubMenuLink href="/advanced/idioms">Idioms</SubMenuLink>
                  </div>
                )} */}
              </div>
            </DropdownMenu>
          )}
        </DropdownContainer>
      </MenuContainer>

      <LoginButtonContainer>
        {session ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                paddingRight: "5px",
                textDecoration: "underline",
              }}
            >
              Logged in as {firstName}.
            </div>

            <div style={{ zIndex: 10 }}>
              <LoginButton onClick={toggleDropdown}>My account</LoginButton>
              {dropdownOpen && (
                <AccountDropdownContainer
                  style={{
                    position: "absolute",
                    top: "40px",
                    right: "0",
                    left: "50",
                    backgroundColor: "white",
                    zIndex: 10,
                    padding: "10px",
                    marginRight: "20px",
                    border: ".5px solid gray",
                  }}
                >
                  <AccountStyledLink
                    href="/events/myEvents"
                    onClick={handleCloseDropdown}
                  >
                    View My Events
                  </AccountStyledLink>
                  {/* <AccountStyledLink
                    href="/marketplace/myProducts"
                    onClick={handleCloseDropdown}
                  >
                    View My Products
                  </AccountStyledLink> */}
                  <AccountStyledLink
                    href="/advertisement/myAdvertisements"
                    onClick={handleCloseDropdown}
                  >
                    View My Advertisements
                  </AccountStyledLink>
                  <AccountLogoutButton onClick={handleLogoutClick}>
                    LOG OUT
                  </AccountLogoutButton>
                </AccountDropdownContainer>
              )}
            </div>
          </div>
        ) : (
          <LoginButton onClick={handleLoginClick}>LOGIN</LoginButton>
        )}
      </LoginButtonContainer>
    </HeroSection>
  );
};

export default Navbar;
