import AttachingStyleBox from "./AttachingStyleBox";
import AutoResizeInput from "./AutoResizeInput";
import DynamicAutoResize from "./DynamicAutoResizeInput";

function ChakraFactoryComponent() {
  return (
    <>
      <AutoResizeInput />
      <DynamicAutoResize />
      <AttachingStyleBox sample>되낭?</AttachingStyleBox>
    </>
  );
}

export default ChakraFactoryComponent;
