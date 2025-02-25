import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavBar = styled(motion.nav)`
  background: rgba(0, 0, 0, 0.8);
  width: 100px;
  height: 100%;
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10%;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none; /* Hide on mobile view */
  }

  a {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.titleColor};
    opacity: 0.8;
    padding: 12px 0;
    text-align: center;
    font-weight: 600;
    text-decoration: none;
    position: relative;

    &:hover {
      color: ${(props) => props.theme.colors.accentGreen};
      svg {
        opacity: 0;
      }
      &:after {
        opacity: 1;
      }
    }

    &:after {
      content: attr(aria-label);
      font-size: 0.8rem;
      position: absolute;
      top: 50%;
      left: 50%;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all 0.3s ease-out;
    }

    &.active svg {
      color: ${(props) => props.theme.colors.primaryBlue};
    }
  }
`;

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <NavBar role="navigation" aria-label="Main Navigation Sidebar">
      <NavLink
        to="/"
        className={pathname === "/" ? "active" : ""}
        aria-label="Home"
        role="link"
      >
        <FontAwesomeIcon icon={faHome} />
      </NavLink>
      <NavLink
        to="/about"
        className={pathname === "/about" ? "active" : ""}
        aria-label="About"
        role="link"
      >
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
      <NavLink
        to="/showcase"
        className={pathname === "/showcase" ? "active" : ""}
        aria-label="Projects"
        role="link"
      >
        <FontAwesomeIcon icon={faSuitcase} />
      </NavLink>
      <NavLink
        to="/design-process"
        className={pathname === "/design-process" ? "active" : ""}
        aria-label="Design Process"
        role="link"
      >
        <FontAwesomeIcon icon={faPen} />
      </NavLink>
      <NavLink
        to="/contact"
        className={pathname === "/contact" ? "active" : ""}
        aria-label="Contact"
        role="link"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </NavLink>
    </NavBar>
  );
};

export default Sidebar;
