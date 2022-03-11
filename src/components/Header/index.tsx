import React from "react";
import Link from "next/link";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { colors } from "../../styles/colors";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();
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
          <>
            <Breadcrumb
              separator=""
              h="100%"
              alignItems="center"
              display="flex"
              spacing={["2", "3", "5"]}
              color={
                colorMode === "light" ? colors.text.dark : colors.text.light
              }
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
                <BreadcrumbLink as={Link} href="/projetos">
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
              <Button
                variant="unstyled"
                onClick={toggleColorMode}
                display="flex"
              >
                {colorMode === "light" ? (
                  <Icon as={FaSun} h="6" w="6" />
                ) : (
                  <Icon as={FaMoon} color="gray.500" h="5" w="5" />
                )}
              </Button>
            </Flex>
          </>
        ) : (
          <>
            <Menu>
              <MenuButton
                as={IconButton}
                display="flex"
                aria-label="Options"
                icon={<FaBars size="22" />}
                variant="unstyled"
                size="xl"
                px="3"
                alignItems="center"
                justifyContent="center"
                color="gray.400"
              />
              <MenuList
                backgroundColor={colorMode === "light" ? "#333333" : "#fafafa"}
              >
                <MenuItem
                  color={colorMode === "light" ? "gray.400" : "#333333"}
                  _focus={{ backgroundColor: "none" }}
                  _hover={{ backgroundColor: "unset" }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  color={colorMode === "light" ? "gray.400" : "#333333"}
                  _focus={{ backgroundColor: "none" }}
                  _hover={{ backgroundColor: "unset" }}
                >
                  Sobre
                </MenuItem>
                <MenuItem
                  color={colorMode === "light" ? "gray.400" : "#333333"}
                  _focus={{ backgroundColor: "none" }}
                  _hover={{ backgroundColor: "unset" }}
                >
                  Projetos
                </MenuItem>
                <MenuItem
                  color={colorMode === "light" ? "gray.400" : "#333333"}
                  _focus={{ backgroundColor: "none" }}
                  _hover={{ backgroundColor: "unset" }}
                >
                  Contato
                </MenuItem>
              </MenuList>
            </Menu>
            <Flex align="center" padding=" 0 0.25rem">
              <Button
                variant="unstyled"
                onClick={toggleColorMode}
                display="flex"
                alignItems="center"
              >
                {colorMode === "light" ? (
                  <Icon as={FaSun} h="6" w="6" />
                ) : (
                  <Icon as={FaMoon} color="gray.500" h="6" w="6" />
                )}
              </Button>
            </Flex>
          </>
        )}
      </Flex>
    </HStack>
  );
};
