import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LogoContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hasMoved", // Prevent hasMoved from being forwarded
})`
  position: fixed;
  top: ${(props) => (props.hasMoved ? "0" : "50%")};
  left: ${(props) => (props.hasMoved ? "0" : "50%")};
  transform: ${(props) =>
    props.hasMoved ? "translate(0, 0) scale(0.5)" : "translate(-50%, -50%)"};
  opacity: ${(props) => (props.hasMoved ? 1 : 1)};
  transition: all 1.5s ease-in-out;
  width: 500px;
  height: 500px;
  z-index: 9999;
  overflow: hidden;
`;

const AnimatedLogo = ({ onComplete }) => {
  const [hasMoved, setHasMoved] = useState(false);
  const svgRef = useRef(null);

  useEffect(() => {
    const svgObject = svgRef.current;

    if (svgObject) {
      svgObject.addEventListener("load", () => {
        const svgDoc = svgObject.contentDocument;
        if (svgDoc) {
          const svgRoot = svgDoc.documentElement;
          if (svgRoot && typeof svgRoot.startAnimation === "function") {
            svgRoot.startAnimation();
          }
        }

        setTimeout(() => {
          setHasMoved(true);
          setTimeout(() => {
            if (onComplete) onComplete(); // Notify parent component after transition
          }, 50); // Match transition duration
        }, 6000); // Adjust this to match your SVG animation duration
      });
    }
  }, [onComplete]);

  return (
    <LogoContainer hasMoved={hasMoved}>
      <object
        ref={svgRef}
        type="image/svg+xml"
        data="/logo.svg"
        aria-label="Blue Rose Design Animated Logo"
        style={{ width: "100%", height: "100%" }}
      >
        Your browser does not support SVGs
      </object>
    </LogoContainer>
  );
};

AnimatedLogo.propTypes = {
  onComplete: PropTypes.func,
};

export default AnimatedLogo;
