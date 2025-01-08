import { useEffect, useState } from "react";
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
  z-index: 9999;

  &.active {
    transform: translateX(0);
    transition: transform 0.8s ease-in-out;
  }

  &.inactive {
    transform: translateX(-100%);
    transition: transform 0.8s ease-in-out;
  }
`;

const PageTransition = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsActive(true);

    const handleAnimationEnd = () => {
      setIsActive(false);
    };

    // Add animation end listener
    const transitionElement = document.querySelector(".page-transition");
    if (transitionElement) {
      transitionElement.addEventListener("transitionend", handleAnimationEnd);
    }

    return () => {
      if (transitionElement) {
        transitionElement.removeEventListener(
          "transitionend",
          handleAnimationEnd
        );
      }
    };
  }, [location]);

  return (
    <>
      <TransitionContainer
        className={`page-transition ${isActive ? "active" : "inactive"}`}
      />
      {children}
    </>
  );
};

export default PageTransition;
