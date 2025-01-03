import { createGlobalStyle } from "styled-components";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    color: ${({ theme }) => theme.colors.accentWhite};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
