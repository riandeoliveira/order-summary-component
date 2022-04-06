import { createGlobalStyle } from "styled-components";
import theme from "../theme/theme.json";
import { waves } from "../../assets/media";

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.primary}, ${theme.fonts.secondary};
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
  }

  html {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  body {
    background-color: ${theme.colors.zumthor};
    background-image: url(${waves});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export default GlobalStyle;
