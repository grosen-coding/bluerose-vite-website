import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";

const MenuContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => (props.isOpen ? "rgba(0,0,0,0.7)" : "none")};
  z-index: 5000;
  height: 100%;
`;

const MenuOpenButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.isOpen ? "transparent" : props.theme.colors.primaryBlue};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  span {
    background: white;
    width: 25px;
    height: 3px;
    display: block;
    margin: 4px 0;
    transition: transform 0.2s ease-in-out;
    position: absolute;

    &:nth-child(1) {
      transform: ${(props) =>
        props.isOpen ? "rotate(45deg) translate(0,0)" : "translateY(-8px)"};
    }
    &:nth-child(2) {
      transform: ${(props) => (props.isOpen ? "scale(0)" : "scale(1)")};
    }
    &:nth-child(3) {
      transform: ${(props) =>
        props.isOpen ? "rotate(-45deg) translate(0, 0)" : "translateY(8px)"};
    }
  }
`;

const MenuItems = styled.div`
  position: absolute;
  bottom: 100px; /* Adjust to position items above the menu */
  left: 50%;
  transform: translateX(-50%);
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;

  a {
    background: #3f51b5; /* Customize */
    color: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }

    &.active {
      background: ${(props) => props.theme.colors.primaryBlue};
    }
  }
`;

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const menuItems = [
    { icon: faHome, link: "/", label: "Home" },
    { icon: faUser, link: "/about", label: "About" },
    { icon: faSuitcase, link: "/showcase", label: "Projects" },
    { icon: faPen, link: "/design-process", label: "Design Process" },
    { icon: faEnvelope, link: "/contact", label: "Contact" },
  ];

  return (
    <MenuContainer>
      <input
        type="checkbox"
        id="menu-toggle"
        style={{ display: "none" }}
        onChange={() => setIsOpen(!isOpen)}
        checked={isOpen}
      />
      <MenuOpenButton htmlFor="menu-toggle" isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </MenuOpenButton>
      <MenuItems isOpen={isOpen}>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.link}
            key={index}
            aria-label={item.label}
            className={pathname === item.link ? "active" : ""}
            role="link"
            onClick={() => setIsOpen(false)} /* Close menu on click */
          >
            <FontAwesomeIcon icon={item.icon} />
          </NavLink>
        ))}
      </MenuItems>
    </MenuContainer>
  );
};

export default HamburgerMenu;
