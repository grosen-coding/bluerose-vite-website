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
  width: calc(100% - 100px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0 5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    left: 0;
    height: 120px;
  }
`;

const BusinessName = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 10rem;
  cursor: crosshair;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding-left: 0;
    width: 100%;
    height: 100%;
    justify-content: space-between;
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

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 2rem;
      padding-top: 0;
    }

    span {
      color: ${(props) => props.theme.colors.accentWhite};
      font-weight: 300;
      font-size: 3rem;

      @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        font-size: 2rem;
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
  font-size: 2rem;
  color: ${(props) => props.theme.colors.titleColor2};
  font-weight: 400;
  margin: 0;
  padding-right: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Map paths to page headings
  const pageHeadings = {
    "/": "",
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
          Custom Landscape Design <span>|</span> 3D Rendering
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
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        role="heading"
        aria-label={`Page: ${pageHeadings[location.pathname] || ""}`}
      >
        {pageHeadings[location.pathname] || ""}
      </PageHeading>
    </HeaderContainer>
  );
};

export default Header;
