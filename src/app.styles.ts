import { getColorByTheme, getSize } from "react-styled-guide";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    scroll-behavior: smooth;
  }

  &::-webkit-scrollbar {
    width: ${getSize(({ nano }) => nano)};
    border-radius: ${getSize(({ quark }) => quark)};
    height: ${getSize(({ nano }) => nano)};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${getSize(({ quark }) => quark)};
    background: ${getColorByTheme(
      ({ neutral }) => neutral.tinyDark,
      ({ neutral }) => neutral.light
    )};
    width: ${getSize(({ nano }) => nano)};
    height: ${getSize(({ nano }) => nano)};
  }

  &::-webkit-scrollbar-track {
    border-radius: ${getSize(({ quark }) => quark)};
    background: ${getColorByTheme(
      ({ neutral }) => neutral.light,
      ({ neutral }) => neutral.tinyDark
    )};
    width: ${getSize(({ nano }) => nano)};
    height: ${getSize(({ nano }) => nano)};
  }
`;

export default GlobalStyle;
