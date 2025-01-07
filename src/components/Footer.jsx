import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;

  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkGreen};
  color: ${(props) => props.theme.colors.accentWhite};
  text-align: center;
  padding: 0.5rem 1rem;
  height: auto;
  width: 90%;
  font-size: 0.8rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 0.7rem;
    padding: 0.5rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer aria-label="Site Footer">
      <p>
        © {new Date().getFullYear()} Blue Rose Design. All Rights Reserved.{" "}
        <a
          href="/privacy-policy"
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          Privacy Policy
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
