import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${(props) => props.theme.colors.backgroundGreen};
    color: #333;
    line-height: 1.6;
  }

    section {
      background-color: ${(props) => props.theme.colors.backgroundGreen};
      height: 100%;
      width: 100%;
      padding: 3rem;
      margin-top: 4rem;
    }

  h1 {
    font-family: 'Playfair Display', serif;
    margin: 0;
    color: ${(props) => props.theme.colors.titleColor};
  }

  h2, h3, h4, h5, h6{
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.titleColor};
    letter-spacing: 1.5px;
  }

  h2 {
          font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: 300;
      text-align: right;
      padding: 1rem 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
