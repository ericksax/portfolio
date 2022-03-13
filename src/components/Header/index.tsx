import React from "react";
import { MenuNav } from "../MenuNav";
import { ToggleTheme } from "../ToggleTheme";
import { MenuBurguer } from "../MenuBurguer";

import { Box, HStack, useBreakpointValue } from "@chakra-ui/react";

export const Header = () => {
  const showNavLinks = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <HStack
      as="header"
      w="100%"
      justify="space-between"
      position="sticky"
      top="24px"
      p="8"
      maxWidth="980px"
      mx="auto"
      backdropFilter="auto"
      backdropBlur="10px"
      zIndex="2"
    >
      <Box>{showNavLinks ? <MenuNav /> : <MenuBurguer />}</Box>
      <ToggleTheme />
    </HStack>
  );
};
