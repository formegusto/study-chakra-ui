import { Box, Button, Divider, Heading, Stack, Text } from "@chakra-ui/react";

function PropsComponent() {
  return (
    <>
      <Stack direction="row" p={4}>
        <Divider orientation="vertical" />
        <Heading size="lg">Style Props 공부</Heading>
      </Stack>
      <Box p={2}>
        <Button
          colorScheme="teal"
          _hover={{
            background: "white",
            color: "teal.500",
          }}
        >
          연습해봅시다.
        </Button>
      </Box>
      <Box role="group" p={4}>
        <Button
          colorScheme="cyan"
          color="white"
          _hover={{ fontWeight: "semibold" }}
          _groupHover={{ bgColor: "blue" }}
        >
          이건또 뭐지용? (그룹)
        </Button>
        <Text>오홍 위에 친구 만져도 변함</Text>
      </Box>
    </>
  );
}

export default PropsComponent;
