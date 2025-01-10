import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LogoContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isFinal",
})`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6000;
  width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  ${(props) => props.isFinal && "animation: slideToCorner 2s ease forwards;"}
  transition: all 0.3s ease-in-out;

  @keyframes slideToCorner {
    0% {
      top: 50%;
      left: 50%;
      width: 500px;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 0px rgba(0, 0, 0, 0.8);
    }

    80% {
      box-shadow: 0 0 0px rgba(0, 0, 0, 0.8);
    }

    100% {
      top: 10px;
      left: 10px;
      width: 180px;
      transform: translate(0, 0);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    @keyframes slideToCorner {
      0% {
        top: 50%;
        left: 50%;
        width: 180px;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 0px rgba(0, 0, 0, 0.8);
      }

      80% {
        box-shadow: 0 0 0px rgba(0, 0, 0, 0.8);
      }

      100% {
        top: 120px;
        /* left: 10px; */
        width: 150px;
        /* transform: translate(0, 0); */
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
      }
    }
  }
`;

const AnimatedLogo = ({ onComplete }) => {
  const [isFinal, setIsFinal] = useState(false);

  useEffect(() => {
    const animationDuration = 6000; // Matches SVGator animation duration
    const timer = setTimeout(() => {
      setIsFinal(true);
      if (onComplete) onComplete();
    }, animationDuration);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [onComplete]);

  return (
    <LogoContainer isFinal={isFinal}>
      <object
        type="image/svg+xml"
        data="/logo.svg"
        aria-label="Blue Rose Design Logo"
        style={{
          pointerEvents: "none",
          // borderRadius: "50%",
        }}
      >
        Your browser does not support SVGs.
      </object>
    </LogoContainer>
  );
};

AnimatedLogo.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default AnimatedLogo;
