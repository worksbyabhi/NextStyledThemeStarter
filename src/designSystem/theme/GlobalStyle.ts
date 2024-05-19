import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Josefin Sans", sans-serif, Arial;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
}
`;

export default GlobalStyle;
