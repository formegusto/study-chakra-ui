import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const globalStyles = extendTheme({
  styles: {
    global: {
      "html, body": {},
    },
  },
});

const globalFuncStyles = extendTheme({
  styles: {
    global: (props: any) => ({
      "html, body": {
        "*": {
          fontFamily: mode(
            "'Montserrat', sans-serif !important",
            "'Roboto', sans-serif !important"
          ),
        },
        body: {
          color: mode("gray.800", "whiteAlpha.900")(props),
        },
      },
    }),
  },
});

export { globalStyles, globalFuncStyles };
