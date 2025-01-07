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
    font-size: clamp(2rem, 5vw, 4rem); /* Responsive scaling */
  }

  h2, h3, h4, h5, h6{
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.titleColor};
    letter-spacing: 1.5px;
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2.5rem); /* Responsive scaling */
      margin-bottom: 1rem;
      font-weight: 300;
      text-align: right;
      padding: 1rem 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    section {
      padding: 2rem; /* Adjust spacing for smaller screens */
    }

    h2 {
      text-align: center; /* Center-align text on smaller devices */
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    body {
      line-height: 1.4; /* Adjust line height for smaller screens */
    }
  }
`;

export default GlobalStyles;
