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
    font-family: 'Montserrat', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
  }

  h1, h2 {
    font-family: 'Playfair Display', serif;
    margin: 0;
  }

  h3, h4, h5, h6 {
    margin: 0;
  font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
