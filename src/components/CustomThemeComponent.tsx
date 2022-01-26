import { Box, Button } from "@chakra-ui/react";

function CustomThemeComponent() {
  return (
    <>
      <Box bg="brand.100">Custom Test!</Box>
      <Button colorShema="brand">버튼은 이렇게!</Button>
      <Button size="xl" variant="with-shadow">
        이렇게요?
      </Button>
    </>
  );
}

export default CustomThemeComponent;
