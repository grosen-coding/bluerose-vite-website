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
  padding: 0.5rem ;
  height: 30px;
  width: calc(100% - 100px);

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
  font-size: .8rem;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer
      role="contentinfo"
      aria-label="Site Footer with copyright and privacy policy information"
    >
      <FooterContent>
        <p>
          <span>Website Designed & Created by Blue Rose Design</span>
        </p>
        <p>
          © {new Date().getFullYear()} Blue Rose Design. All Rights Reserved.{" "}
          <a
            href="/privacy-policy"
            style={{ color: "inherit", textDecoration: "underline" }}
            aria-label="Privacy Policy of Blue Rose Design"
          >
            Privacy Policy
          </a>
        </p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
