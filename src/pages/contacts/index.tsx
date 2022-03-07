import { Heading, Text } from "@chakra-ui/react";
import { ContainerBox } from "../../components/ContainerBox";
import { colors } from "../../styles/colors";

export default function Contacts() {
  return (
    <ContainerBox>
      <Heading as="h2" w="100%" maxW="1024px" p="8">
        <Text
          bgGradient={colors.linearGradient}
          bgClip="text"
          fontSize="48"
          lineHeight="5rem"
        >
          Contatos
        </Text>
      </Heading>
    </ContainerBox>
  );
}
