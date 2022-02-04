import {
  Box,
  Flex,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
} from "@chakra-ui/react";

function Menu(props: any) {
  const { size, variant, children, ...rest } = props;
  const styles = useMultiStyleConfig("Menu", { size, variant });

  return (
    <Flex __css={styles.menu} {...rest}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Flex>
  );
}

function MenuItem(props: any) {
  const styles = useStyles();

  return <Box as="button" __css={styles.item} {...props} />;
}

function MenuComponent() {
  return (
    <Menu>
      <MenuItem>메뉴</MenuItem>
      <MenuItem>메뉴</MenuItem>
      <MenuItem>메뉴</MenuItem>
    </Menu>
  );
}

export default MenuComponent;
