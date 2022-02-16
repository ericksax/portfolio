import styles from "./styles.module.scss";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/";
import { Flex, Stack, Box } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

export const Footer = () => {
  return (
    <IconContext.Provider value={{ className: styles["react-icons"] }}>
      <Flex
        as="footer"
        direction="column"
        justify="center"
        align="center"
        w="100%"
        borderTopWidth="1px"
        borderColor={theme.colors.brand.lineBorder}
        py="4"
        marginTop="16"
      >
        <Stack spacing="4">
          <Box as="aside">Social Media</Box>
          <Stack as="aside" spacing="4" direction="row" justify="center">
            <FaTwitter size={20} />
            <FaLinkedinIn size={20} />
          </Stack>
        </Stack>
      </Flex>
    </IconContext.Provider>
  );
};
