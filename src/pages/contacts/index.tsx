import { Heading, Text, Link, HStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
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
      <Text px="8">
        Estou presente nas principais redes sociais, ou se preferir pode me
        contactar por Email. Deixo também meu{" "}
        <Link
          color="gray.300"
          isExternal
          href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:ae93611a-6864-3062-b9e7-cd9667755767"
        >
          currículo
        </Link>{" "}
        para apreciacao.
      </Text>
      <HStack p="8" spacing={30}>
        <Link>
          <FaLinkedin size={40} />
        </Link>
        <Link>
          <FaGithub size={40} />
        </Link>
        <Link>
          <FaInstagram size={40} />
        </Link>
      </HStack>
    </ContainerBox>
  );
}
