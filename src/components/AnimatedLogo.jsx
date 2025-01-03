import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled-components for the logo container
const LogoContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hasMoved", // Prevent hasMoved from being passed to the DOM
})`
  position: fixed;
  top: ${(props) => (props.hasMoved ? "0" : "50%")};
  left: ${(props) => (props.hasMoved ? "0" : "50%")};
  transform: ${(props) =>
    props.hasMoved ? "translate(0, 0) scale(0.5)" : "translate(-50%, -50%)"};
  width: 500px;
  height: 500px;
  z-index: 9999;
  transition: all 1.5s ease-in-out;
  overflow: hidden;
`;

const AnimatedLogo = ({ onComplete }) => {
  const [hasMoved, setHasMoved] = useState(false);
  const svgRef = useRef(null);

  useEffect(() => {
    const svgObject = svgRef.current;

    // Wait for the embedded SVG animations to complete
    if (svgObject) {
      svgObject.addEventListener("load", () => {
        const svgDoc = svgObject.contentDocument;
        if (svgDoc) {
          const svgRoot = svgDoc.documentElement;
          if (svgRoot && typeof svgRoot.startAnimation === "function") {
            svgRoot.startAnimation();
          }
        }

        // After 6 seconds (or your animation duration), transition the logo
        setTimeout(() => {
          setHasMoved(true); // Trigger the move to top-left
          if (onComplete) onComplete(); // Notify parent component
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
