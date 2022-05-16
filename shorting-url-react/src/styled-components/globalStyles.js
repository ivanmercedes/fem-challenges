import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, :after, :before {
      box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
