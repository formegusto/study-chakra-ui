import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const ColorModeTheme = extendTheme({ config });

export default ColorModeTheme;
