import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ColorModeTheme from "./providerMat/ColorModeTheme";
import theme from "./theme";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript
      initialColorMode={ColorModeTheme.config.initialColorMode}
    />
    <App />
    <a href="http://naver.com">살짝ㄱ쿵</a>
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
