import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const HeaderContainer = styled(motion.header)`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space for the page heading */
  z-index: 1000;
  background-color: ${(props) => props.theme.colors.deepBlack};
  padding: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: 0.5rem;
  }

  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.primaryBlue};
    font-family: "Playfair Display", serif;
    font-weight: 700;
    margin: 0;

    span {
      color: ${(props) => props.theme.colors.accentWhite};
      font-weight: 300;
      font-size: 2rem;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 1.8rem;

      span {
        font-size: 1.2rem;
      }
    }
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 300;
    color: ${(props) => props.theme.colors.accentGreen};
    margin-top: 0.5rem;

    span {
      margin: 0 0.5rem;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 0.9rem;
    }
  }
`;

const BusinessName = styled(Link)`
  text-decoration: none;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center; /* Keep alignment consistent */
  justify-content: center;
  width: 70%;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: center;
    align-items: center;
  }
`;

const PageHeading = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.titleColor};
  font-weight: 400;
  margin: 0;
  align-self: flex-end; /* Align to the top-right corner */
  padding-right: 1rem;
  width: 30%;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const Header = () => {
  const location = useLocation();

  // Map paths to page headings
  const pageHeadings = {
    "/": "Home",
    "/about": "About Us",
    "/contact": "Contact",
    "/design-process": "Design Process",
    "/services": "Services",
    "/showcase": "Showcase",
  };

  return (
    <HeaderContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      aria-label="Main site header"
    >
      <BusinessName to="/">
        <h1>
          BLUE ROSE <span>DESIGN</span>
        </h1>
        <h4>
          Landscape Design <span>|</span> Project Management
        </h4>
      </BusinessName>
      <PageHeading
        key={location.pathname}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        {pageHeadings[location.pathname] || ""}
      </PageHeading>
    </HeaderContainer>
  );
};

export default Header;
