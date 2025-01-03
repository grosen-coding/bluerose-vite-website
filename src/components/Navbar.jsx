import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  z-index: 1000;
`;

const LogoSpace = styled.div`
  width: 23%;
  height: 100%;
`;

const BusinessName = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 35%;
  height: auto;
  font-size: 1.8rem;
  text-decoration: none;
  color: white;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  padding-top: 1.9rem;
  padding-left: 0;
  margin-left: 0;

  h3 {
    font-weight: 700;
    font-size: 2.2rem;
    font-family: "Playfair Display", serif;
    color: ${(props) => props.theme.colors.primaryBlue};
  }

  h4 {
    font-weight: 300;
    font-size: 1.1rem;
  }

  &:hover {
    color: lightblue;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42%;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: 300;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  font-family: "News Gothic", sans-serif;
  letter-spacing: 1.8px;
  padding: 0 0.8rem;

  &:hover {
    color: lightblue;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: lightblue;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

// Navbar Animation Variants
const navbarVariants = {
  hidden: { y: -200, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } },
};

const Navbar = ({ isVisible }) => {
  return (
    <NavContainer
      variants={navbarVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <LogoSpace />
      <BusinessName to="/">
        <h3>
          BLUE ROSE <span style={{ color: "white" }}>Design</span>
        </h3>
        <h4>Landscape Design | Project Management</h4>
      </BusinessName>

      <NavLinks>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/design-process">design process</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
