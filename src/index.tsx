import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ColorModeTheme from "./providerMat/ColorModeTheme";
import menuTheme from "./theme/menuTheme";

/*
Semantic token example theme
오우,, _dark로 컬러조절 가능함

const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      primary: {
        default: "red.500",
        _dark: "red.400",
      },
      secondary: {
        default: "red.800",
        _dark: "red.700",
      },
    },
  },
});
*/

/*
default theme 확인
https://chakra-ui.com/docs/theming/theme
*/

ReactDOM.render(
  <ChakraProvider theme={menuTheme}>
    <ColorModeScript
      initialColorMode={ColorModeTheme.config.initialColorMode}
    />
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
