import { chakra, Textarea } from "@chakra-ui/react";

const DynamicAutoResize = chakra(Textarea, {
  baseStyle: {
    bg: "papywhip",
    color: "red.500",
  },
});

export default DynamicAutoResize;
