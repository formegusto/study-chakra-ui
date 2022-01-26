import React from "react";
import ChakraFactoryComponent from "./components/ChakraFactoryComponent";
import ColorModeComponent from "./components/ColorModeComponent";
import CustomThemeComponent from "./components/CustomThemeComponent";
import GradientComponent from "./components/GradientComponent";
import PropsComponent from "./components/PropsComponent";
import SemanticTokensComponent from "./components/SemanticTokensComponent";
import TextStyleComponent from "./components/TextStyleComponent";

function App() {
  return (
    <>
      <PropsComponent />
      <GradientComponent />
      <ColorModeComponent />
      <SemanticTokensComponent />
      <ChakraFactoryComponent />
      <TextStyleComponent />
      <CustomThemeComponent />
    </>
  );
}

export default App;
