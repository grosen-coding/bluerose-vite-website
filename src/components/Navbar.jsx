import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
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
  width: 20%;
  height: 100%;
`;

const BusinessName = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 40%;
  height: auto;
  font-size: 1.8rem;
  text-decoration: none;
  color: white;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  padding-top: 1.9rem;

  h4 {
    font-weight: 300;
    font-size: 1.5rem;
  }

  &:hover {
    color: lightblue;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
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

const Navbar = () => {
  return (
    <NavContainer>
      <BusinessName to="/">
        <h4>Landscape Design</h4> <h4>& Project Management</h4>
      </BusinessName>
      <LogoSpace />
      <NavLinks>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/design-process">Design Process</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
