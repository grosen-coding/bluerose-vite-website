import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LogoContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hasMoved" && prop !== "inNavbar",
})`
  position: fixed;
  top: ${(props) => (props.inNavbar ? "0" : "50%")};
  left: ${(props) => (props.inNavbar ? "15%" : "50%")};
  transform: translate(-50%, ${(props) => (props.inNavbar ? "0" : "-50%")})
    scale(${(props) => (props.inNavbar ? 1 : 1)});
  transition: all 1.5s ease-in-out;
  z-index: 2000;
  width: ${(props) => (props.inNavbar ? "250px" : "500px")};
  height: ${(props) => (props.inNavbar ? "250px" : "500px")};
`;

const AnimatedLogo = ({ onComplete, inNavbar }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
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

        // Animation completes after 6 seconds
        setTimeout(() => {
          setAnimationComplete(true);
          if (onComplete) onComplete();
        }, 6000);
      });
    }
  }, [onComplete]);

  return (
    <LogoContainer inNavbar={animationComplete && inNavbar}>
      <object
        ref={svgRef}
        type="image/svg+xml"
        data="/logo.svg"
        aria-label="Blue Rose Design Logo"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        Your browser does not support SVGs.
      </object>
    </LogoContainer>
  );
};

AnimatedLogo.propTypes = {
  onComplete: PropTypes.func.isRequired,
  inNavbar: PropTypes.bool.isRequired,
};

export default AnimatedLogo;
