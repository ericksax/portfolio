import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export const MenuBurguer = () => {
  const { colorMode } = useColorMode();
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        display="flex"
        aria-label="Options"
        icon={<FaBars size="21" />}
        variant="unstyled"
        size="md"
        alignItems="center"
        justifyContent="center"
        color={colorMode === "light" ? "gray.400" : "gray.500"}
      />
      <MenuList
        boxSize="100%"
        backgroundColor={colorMode === "light" ? "#333333" : "#fafafa"}
      >
        <MenuItem
          fontSize="20"
          color={colorMode === "light" ? "gray.400" : "#333333"}
          _focus={{ backgroundColor: "none" }}
          _hover={{ backgroundColor: "unset" }}
        >
          <Text as={Link} href="/">
            Home
          </Text>
        </MenuItem>
        <MenuItem
          fontSize="20"
          color={colorMode === "light" ? "gray.400" : "#333333"}
          _focus={{ backgroundColor: "none" }}
          _hover={{ backgroundColor: "unset" }}
        >
          <Text as={Link} href="/about">
            Sobre
          </Text>
        </MenuItem>

        <MenuItem
          fontSize="20"
          color={colorMode === "light" ? "gray.400" : "#333333"}
          _focus={{ backgroundColor: "none" }}
          _hover={{ backgroundColor: "unset" }}
        >
          <Text as={Link} href="/projetos">
            Projetos
          </Text>
        </MenuItem>

        <MenuItem
          fontSize="20"
          color={colorMode === "light" ? "gray.400" : "#333333"}
          _focus={{ backgroundColor: "none" }}
          _hover={{ backgroundColor: "unset" }}
        >
          <Text as={Link} href="/contacts">
            Contatos
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
