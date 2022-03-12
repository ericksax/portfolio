import React from "react";
import {MenuNav} from "../MenuNav"
import { ToggleTheme } from "../MenuHamburguer"
import { MenuBurguer } from "../MenuBurguer";

import {
  Flex,
  HStack,
  useBreakpointValue
} from "@chakra-ui/react";

export const Header = () => {

  const showNavLinks = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <HStack
      as="header"
      w="100%"
      justify="center"
      position="sticky"
      top="24px"
      backdropFilter="auto"
      backdropBlur="10px"
      zIndex="2"
    >
      <Flex
        as="nav"
        w="100%"
        maxWidth="780px"
        h="100px"
        justify="space-between"
        p="8"
      >
        {showNavLinks ? (
           <MenuNav/> 
        ) : (
          <MenuBurguer/>
        )}
          <ToggleTheme/>
      </Flex>
    </HStack>
  );
};
