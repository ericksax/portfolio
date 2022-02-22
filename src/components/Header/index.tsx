import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  HStack,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import React from "react";
import { colors } from "../../styles/colors";

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack
      as="header"
      w="100%"
      justify="center"
      position="sticky"
      top="0"
      backdropFilter="auto"
      backdropBlur="10px"
      zIndex="2"
    >
      <Flex
        as="nav"
        w="100%"
        maxWidth="1024px"
        h="100px"
        justify="space-between"
        p="8"
      >
        <Breadcrumb
          separator=""
          w="600px"
          h="100%"
          alignItems="center"
          display="flex"
          spacing="50"
          fontWeight="500"
          fontSize="sm"
          color={colorMode === "light" ? colors.text.dark : colors.text.light}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/about">
              Sobre
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/">
              Projetos
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/contacts">
              Contatos
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Flex align="center" padding=" 0 0.25rem">
          <Button variant="unstyled" onClick={toggleColorMode} display="flex">
            {colorMode === "light" ? (
              <Icon as={FaSun} h="6" w="6" />
            ) : (
              <Icon as={FaMoon} color="gray.500" h="5" w="5" />
            )}
          </Button>
        </Flex>
      </Flex>
    </HStack>
  );
};
