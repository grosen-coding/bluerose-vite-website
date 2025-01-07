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
    }

  h1 {
    font-family: 'Playfair Display', serif;
    margin: 0;
    color: ${(props) => props.theme.colors.titleColor};
  }

  h2, h3, h4, h5, h6{
    margin: 0;
    /* font-family: 'News Gothic', sans-serif; */
        font-family: 'Montserrat', sans-serif;
            color: ${(props) => props.theme.colors.titleColor};
    letter-spacing: 1.5px;
  }

  h2 {
          font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: 300;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      width: 80%;
      padding: 1rem;
  }

  p {
        font-size: 1.2rem;
    line-height: 1.8;
    max-width: 800px;
    font-weight: 300;

  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
