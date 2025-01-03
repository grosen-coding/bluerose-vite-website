import { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const TransitionContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primaryBlue};
  transform: translateX(-100%);
  transition: transform 0.8s ease-in-out;
  z-index: 9999;

  &.active {
    transform: translateX(0);
  }
`;

const PageTransition = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsActive(true);
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 800); // Match transition duration

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <TransitionContainer className={isActive ? "active" : ""} />
      {children}
    </>
  );
};

export default PageTransition;
