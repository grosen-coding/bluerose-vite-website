import { useEffect, useState } from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  position: fixed;
  top: ${(props) => (props.isInNavbar ? "1rem" : "50%")};
  left: ${(props) => (props.isInNavbar ? "50%" : "50%")};
  transform: translate(-50%, ${(props) => (props.isInNavbar ? "0" : "-50%")})
    scale(${(props) => (props.isInNavbar ? 0.5 : 1)});
  transition: all 1.5s ease-in-out;
  z-index: 1000;
  width: ${(props) => (props.isInNavbar ? "150px" : "500px")};
  height: ${(props) => (props.isInNavbar ? "150px" : "500px")};
`;

const Logo = ({ isInNavbar }) => {
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLogoLoaded(true), 6000); // Match your loading animation duration
  }, []);

  return (
    <LogoContainer isInNavbar={logoLoaded && isInNavbar}>
      <img
        src="/logo.svg"
        alt="Blue Rose Design Logo"
        style={{ width: "100%", height: "100%" }}
      />
    </LogoContainer>
  );
};

export default Logo;
