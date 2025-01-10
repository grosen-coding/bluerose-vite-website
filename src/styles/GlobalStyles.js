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
    color: ${(props) => props.theme.colors.textColor};
    line-height: 1.3;
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
    font-size: 1rem;
      margin-bottom: 1rem;
      font-weight: 300;
      text-align: right;
      padding: 1rem 0;
  }

  p {
    color: white;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 1rem;
  }


  a {
    text-decoration: none;
    color: inherit;
  }
  

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {


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
