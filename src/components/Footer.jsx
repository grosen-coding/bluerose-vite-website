import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkGreen};
  color: white;
  text-align: center;
  padding: 0.2rem;
  height: 5vh;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p style={{ fontSize: "0.8rem" }}>
        © {new Date().getFullYear()} Blue Rose Design. All Rights Reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;
