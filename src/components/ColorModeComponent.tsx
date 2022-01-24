import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

function ColorModeComponent() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "gray.800");

  return (
    <Box>
      <Box p={4} bg={bg} color={color}>
        {colorMode} : 이 친구가 바뀔거임
      </Box>
      <Button size="sm" onClick={toggleColorMode}>
        change mode
      </Button>
    </Box>
  );
}

export default ColorModeComponent;
