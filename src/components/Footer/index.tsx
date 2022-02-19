import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Flex, Stack, Box, Icon, useColorMode, color } from "@chakra-ui/react";
import { colors } from "../../styles/colors";

export const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="footer"
      direction="column"
      justify="center"
      align="center"
      w="100%"
      borderTopWidth="1px"
      borderColor={
        colorMode === "light" ? colors.lineBorder.dark : colors.lineBorder.ligth
      }
      py="4"
      marginTop="16"
    >
      <Stack spacing="4">
        <Box
          as="aside"
          color={
            colorMode === "light"
              ? colors.secundaryText.dark
              : colors.secundaryText.light
          }
        >
          Social Media
        </Box>
        <Stack as="aside" spacing="4" direction="row" justify="center">
          <Icon
            as={FaTwitter}
            size={20}
            color={
              colorMode === "light"
                ? colors.secundaryText.dark
                : colors.secundaryText.light
            }
          />
          <Icon
            as={FaLinkedinIn}
            size={20}
            color={
              colorMode === "light"
                ? colors.secundaryText.dark
                : colors.secundaryText.light
            }
          />
        </Stack>
      </Stack>
    </Flex>
  );
};
