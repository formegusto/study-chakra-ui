import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import Card from "./Card";

function CustomThemeComponent() {
  return (
    <>
      <Box bg="brand.100">Custom Test!</Box>
      <Button colorShema="brand">버튼은 이렇게!</Button>
      <Button size="sm" variant="solid">
        이렇게요?
      </Button>
      <Card>
        <Image
          src="https://chakra-ui.com/eric.jpg"
          rounded="full"
          w={32}
          h={32}
          boxShadow="md"
        />
        <Heading mt={6} maxW={60} size="lg" textAlign="center" color="gray.700">
          Welcome back, Eric
        </Heading>
        <Text mt={6} mb={6} color="blackAlpha.500">
          Use your fingerprint to continue.
        </Text>
        <Image src="https://chakra-ui.com/eric.jpg" w={32} h={32} />
      </Card>
    </>
  );
}

export default CustomThemeComponent;
