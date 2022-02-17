import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Flex, Stack, Box, Icon} from "@chakra-ui/react";
import { colors } from "../../styles/colors";

export const Footer = () => {
  return (
 
      <Flex
        as="footer"
        direction="column"
        justify="center"
        align="center"
        w="100%"
        borderTopWidth="1px"
        borderColor={colors.lineBorder.dark}
        py="4"
        marginTop="16"
      >
        <Stack spacing="4">
          <Box as="aside">Social Media</Box>
          <Stack as="aside" spacing="4" direction="row" justify="center">
            <Icon as={FaTwitter} size={20} />
            <Icon as={FaLinkedinIn} size={20} />
          </Stack>
        </Stack>
      </Flex>
  
  );
};
