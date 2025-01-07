import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkGreen};
  color: ${(props) => props.theme.colors.accentWhite};
  padding: 0.5rem 1rem;
  height: auto;
  width: 90%;
  font-size: 0.8rem;

  p {
    opacity: 0.7;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 0.7rem;
    padding: 0.5rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer aria-label="Site Footer">
      <FooterContent>
        <p>
          <span>Website Designed & Created by Blue Rose Design</span>
        </p>
        <p>
          © {new Date().getFullYear()} Blue Rose Design. All Rights Reserved.{" "}
          <a
            href="/privacy-policy"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            Privacy Policy
          </a>
        </p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
