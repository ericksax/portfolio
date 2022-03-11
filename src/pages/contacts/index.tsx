import { Heading, Text, Link, HStack, useColorMode } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ContainerBox } from "../../components/ContainerBox";
import { colors } from "../../styles/colors";

export default function Contacts() {
  const { colorMode } = useColorMode();
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
      <Text px="8" style={{ textIndent: 20 }}>
        Estou presente nas principais redes sociais, ou se preferir pode me
        contactar por Email. Deixo também meu{" "}
        <Link
          color={colorMode === "light" ? "gray.200" : "gray.400"}
          isExternal
          href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:ae93611a-6864-3062-b9e7-cd9667755767"
        >
          currículo
        </Link>{" "}
        para apreciacao.
      </Text>
      <HStack p="8" spacing={30}>
        <Link isExternal href="https://linkedin.com/in/erick-freitas-dev">
          <FaLinkedin size={40} />
        </Link>
        <Link isExternal href="https://github.com/ericksax">
          <FaGithub size={40} />
        </Link>
        <Link
          isExternal
          href="https://www.instagram.com/invites/contact/?i=7anaav574qtg&utm_content=vc4nb"
        >
          <FaInstagram size={40} />
        </Link>
        <Link
          isExternal
          href="https://api.whatsapp.com/send?phone=5532999902406"
        >
          <FaWhatsapp size={40} />
        </Link>
      </HStack>
    </ContainerBox>
  );
}
