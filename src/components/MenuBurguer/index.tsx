import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { colors } from "../../styles/colors";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  Text,
} from "@chakra-ui/react";

function modeReturn(colorMode: string) {
  return colorMode === "light" ? "gray.300" : "gray.400";
}

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
        color={modeReturn(colorMode)}
      />
      <MenuList
        boxSize="100%"
        backgroundColor={
          colorMode === "light"
            ? colors.background.dark
            : colors.background.light
        }
      >
        <MenuItem
          fontSize="20"
          color={modeReturn(colorMode)}
          _focus={{ backgroundColor: "none" }}
          _hover={{ backgroundColor: "unset" }}
        >
          <Text as={Link} href="/">
            Home
          </Text>
        </MenuItem>
        <MenuItem
          fontSize="20"
          color={modeReturn(colorMode)}
          _focus={{ backgroundColor: "none" }}
          _hover={{ backgroundColor: "unset" }}
        >
          <Text as={Link} href="/about">
            Sobre
          </Text>
        </MenuItem>

        <MenuItem
          fontSize="20"
          color={modeReturn(colorMode)}
          _focus={{ backgroundColor: "none" }}
          _hover={{ backgroundColor: "unset" }}
        >
          <Text as={Link} href="/projetos">
            Projetos
          </Text>
        </MenuItem>

        <MenuItem
          fontSize="20"
          color={modeReturn(colorMode)}
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
