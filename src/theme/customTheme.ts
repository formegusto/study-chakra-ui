import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
});

/*
모든 버튼 들이 디폴트로 적용됨
*/
const singleCompTheme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },

      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
        solid: (props: any) => ({
          bg: props.colorMode === "dark" ? "red.300" : "red.500",
        }),
      },
    },
  },
});

export { customTheme, singleCompTheme };
