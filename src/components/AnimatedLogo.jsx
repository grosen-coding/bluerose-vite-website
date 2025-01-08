import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LogoContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isFinal",
})`
  position: ${(props) => (props.isFinal ? "fixed" : "absolute")};
  top: ${(props) => (props.isFinal ? "1rem" : "50%")};
  left: ${(props) => (props.isFinal ? "1rem" : "50%")};
  transform: translate(
    ${(props) => (props.isFinal ? "0" : "-50%")},
    ${(props) => (props.isFinal ? "0" : "-50%")}
  );
  z-index: 2000;
  box-shadow: ${(props) =>
    props.isFinal ? "0 0 20px rgba(0, 0, 0, 0.6)" : "none"};
  width: ${(props) => (props.isFinal ? "13rem" : "25rem")};
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  transition:
    transform 3.8s ease,
    width 3.8s ease,
    box-shadow 2.3s ease,
    top 3.8s ease,
    left 3.8s ease;
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
