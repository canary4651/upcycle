import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Spoqa Han Sans Neo';
    font-size: 1.6rem;
  }

  ol, ul {
  list-style: none;
}
`;

export default GlobalStyle;
