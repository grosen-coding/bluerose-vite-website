import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MobileNavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.backgroundGreen};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4000;

  a {
    font-size: 1.5rem;
    color: white;
    margin: 1rem 0;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.colors.primaryBlue};
    }

    &.active {
      font-weight: bold;
      color: ${(props) => props.theme.colors.primaryBlue};
    }
  }
`;

const menuVariants = {
  open: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  closed: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const MobileNav = ({ isVisible, links, onLinkClick }) => {
  return (
    <MobileNavContainer
      initial="closed"
      animate={isVisible ? "open" : "closed"}
      variants={menuVariants}
      role="navigation" // Added role for screen readers
      aria-label="Mobile Navigation Menu"
    >
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={onLinkClick} // Close menu when link is clicked
          role="menuitem" // Mark each link as a menu item
          tabIndex={isVisible ? 0 : -1} // Manage focusability
        >
          {link.label}
        </NavLink>
      ))}
    </MobileNavContainer>
  );
};

export default MobileNav;
