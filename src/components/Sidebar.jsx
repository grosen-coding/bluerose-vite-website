import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faWrench,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavBar = styled(motion.nav)`
  background: rgba(0, 0, 0, 0.6);
  width: 10%;
  height: 100vh;
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 4rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none; /* Hide on mobile view */
  }

  a {
    font-size: 2.3rem;
    color: ${(props) => props.theme.colors.titleColor};
    opacity: 0.8;
    padding: 0.6rem 0;
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
      font-size: 1.1rem;
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
    <NavBar
      role="navigation"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
      <NavLink
        to="/"
        className={pathname === "/" ? "active" : ""}
        aria-label="Home"
      >
        <FontAwesomeIcon icon={faHome} />
      </NavLink>
      <NavLink
        to="/about"
        className={pathname === "/about" ? "active" : ""}
        aria-label="About"
      >
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
      <NavLink
        to="/showcase"
        className={pathname === "/showcase" ? "active" : ""}
        aria-label="Portfolio"
      >
        <FontAwesomeIcon icon={faSuitcase} />
      </NavLink>
      <NavLink
        to="/design-process"
        className={pathname === "/design-process" ? "active" : ""}
        aria-label="Design Process"
      >
        <FontAwesomeIcon icon={faPen} />
      </NavLink>
      <NavLink
        to="/services"
        className={pathname === "/services" ? "active" : ""}
        aria-label="Services"
      >
        <FontAwesomeIcon icon={faWrench} />
      </NavLink>
      <NavLink
        to="/contact"
        className={pathname === "/contact" ? "active" : ""}
        aria-label="Contact"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </NavLink>
    </NavBar>
  );
};

export default Sidebar;
