import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LogoContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isFinal",
})`
  position: ${(props) => (props.isFinal ? "fixed" : "absolute")};
  top: ${(props) => (props.isFinal ? "0" : "50%")};
  left: ${(props) => (props.isFinal ? "0" : "50%")};
  transform: translate(
    ${(props) => (props.isFinal ? "0" : "-50%")},
    ${(props) => (props.isFinal ? "0" : "-50%")}
  );
  transition: all 2s ease-in-out;
  z-index: 2000;
  width: ${(props) => (props.isFinal ? "15%" : "500px")};
  height: auto;
  border-radius: 50%;
`;

const AnimatedLogo = ({ onComplete }) => {
  const [isFinal, setIsFinal] = useState(false);

  useEffect(() => {
    // Wait for the SVGator animation duration before transitioning
    const animationDuration = 6000; // Adjust based on your SVGator animation duration
    const timer = setTimeout(() => {
      setIsFinal(true); // Trigger the scaling and moving transition
      if (onComplete) onComplete();
    }, animationDuration);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [onComplete]);

  return (
    <LogoContainer isFinal={isFinal}>
      <object
        type="image/svg+xml"
        data="/logo.svg"
        aria-label="Blue Rose Design Logo"
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          borderRadius: "50%",
          boxShadow: isFinal ? "0 0 20px rgba(0, 0, 0, 0.6)" : "none",
          // boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)",
          transition: "all 1.5s ease-in-out",
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
