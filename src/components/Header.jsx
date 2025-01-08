import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { useState } from "react";
import OpenClose from "./OpenClose"; // Import the hamburger menu logic
import MobileNav from "./MobileNav"; // Import the mobile menu

const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block; /* Ensures visibility in mobile view */
    cursor: pointer;
  }
`;

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 1);
  padding-right: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const BusinessName = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 6rem;
  width: 70%;
  cursor: crosshair;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: center;
    align-items: center;
  }

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.primaryBlue};
    font-family: "Playfair Display", serif;
    font-weight: 700;
    padding: 0;
    margin: 0;
    line-height: 1.2;
    padding-top: 1rem;

    span {
      color: ${(props) => props.theme.colors.accentWhite};
      font-weight: 300;
      font-size: 2.5rem;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 1.8rem;

      span {
        font-size: 1.2rem;
      }
    }
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 300;
    color: ${(props) => props.theme.colors.accentGreen};
    margin: 0;
    padding: 0;
    padding-bottom: 1rem;

    span {
      font-size: 1.3rem;
      opacity: 0.4;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 0.9rem;
    }
  }
`;

const PageHeading = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.titleColor2};
  font-weight: 400;
  margin: 0;
  /* align-self: flex-start; */
  padding-right: 1rem;
  width: 35%;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Map paths to page headings
  const pageHeadings = {
    "/": "Home",
    "/about": "Who I Am",
    "/contact": "Contact Me",
    "/design-process": "My Design Process",
    "/services": "My Services",
    "/showcase": "Design Showcase",
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/design-process", label: "Design Process" },
    { path: "/services", label: "Services" },
    { path: "/showcase", label: "Showcase" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <HeaderContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      role="banner"
      aria-label="Main site header"
    >
      <BusinessName aria-labelledby="business-title business-subtitle">
        <h1 id="business-title">
          BLUE ROSE <span>DESIGN</span>
        </h1>
        <h2 id="business-subtitle">
          Landscape Design <span>|</span> Project Management
        </h2>
      </BusinessName>

      <HamburgerMenu onClick={() => setMenuOpen(!menuOpen)}>
        <OpenClose isActive={menuOpen} onClick={toggleMenu} />
      </HamburgerMenu>

      <MobileNav
        isVisible={menuOpen}
        isOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        links={links}
        onLinkClick={() => setMenuOpen(false)} // Close menu on link click
      />

      <PageHeading
        key={location.pathname}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        aria-label={`Page: ${pageHeadings[location.pathname] || ""}`}
      >
        {pageHeadings[location.pathname] || ""}
      </PageHeading>
    </HeaderContainer>
  );
};

export default Header;
