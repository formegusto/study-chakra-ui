import { Box, Text } from "@chakra-ui/react";

function GradientComponent() {
  return (
    <Box
      w={500}
      h={300}
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
    >
      <Text
        fontSize="md"
        bgClip="text"
        bgGradient="linear(to-tr, teal.300, yellow.400)"
      >
        이게 텍스트에도 적용이 된다는 사실에 너는 놀랄 것임
      </Text>
    </Box>
  );
}

export default GradientComponent;
