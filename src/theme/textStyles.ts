import { extendTheme } from "@chakra-ui/react";

const textStyle = extendTheme({
  textStyles: {
    h1: {
      fontSize: ["16px", "32px", "52px", "72px"],
      fontWeight: [300, 700],
    },
  },
});

export default textStyle;
