import { chakra, Textarea } from "@chakra-ui/react";

const Input = chakra(Textarea);

function AutoResizeInput() {
  return <Input bg="red.200" fontSize="12px" />;
}

export default AutoResizeInput;
