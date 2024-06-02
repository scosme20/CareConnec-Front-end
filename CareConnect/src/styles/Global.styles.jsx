import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #E8EDDF;
  }

  h1, h2, h3, h4, h5, h6, a {
    font-family: "Kanit", sans-serif;
  font-weight: 300;
  font-style: normal;
  }

  p {
    font-family: "Mohave", sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  }
`;

export default GlobalStyles;