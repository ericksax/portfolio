import { Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import { colors } from "../../styles/colors";

export default function Contacts() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="section"
      h="100vh"
      w="100%"
      maxW="1024px"
      mx="auto"
      my="16"
      borderRadius="16px"
      borderWidth="1px"
      borderColor={
        colorMode === "light" ? colors.lineBorder.dark : colors.lineBorder.ligth
      }
    >
      <Heading as="h2" w="100%" maxW="1024px" p="8">
        <Text bgGradient={colors.linearGradient} bgClip="text" fontSize="48">
          Contatos
        </Text>
      </Heading>
    </Flex>
  );
}
