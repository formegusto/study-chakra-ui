import { chakra, shouldForwardProp } from "@chakra-ui/react";

const AttachingStyleBox = chakra("div", {
  shouldForwardProp: (prop) => {
    const isChakraProp = !shouldForwardProp(prop);

    if (isChakraProp) return false;
    return ["sample"].includes(prop);
  },
});

export default AttachingStyleBox;
