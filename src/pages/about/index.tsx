import Image from "next/image";
import cityPic from "../../../images/juizdefora.jpg";
import Foz from "../../assets/fozdoiguacu.jpg";
import { Heading, Text, Box, Stack, useColorMode } from "@chakra-ui/react";
import { TimeLine } from "../../components/timeLine";
import { colors } from "../../styles/colors";
import { css } from "@emotion/css";
import { ContainerBox } from "../../components/ContainerBox";
import { Title } from "../../components/Heading";

export default function About(): JSX.Element {
  const { colorMode } = useColorMode();
  return (
    <ContainerBox>
      <Stack
        spacing={12}
        as="section"
        w="100%"
        maxW="1024px"
        mx="auto"
        borderRadius={16}
        p={8}
      >
        <Heading as="h1" w="100%">
          <Text
            bgGradient={colors.linearGradient}
            bgClip="text"
            fontSize="48"
            lineHeight="5rem"
          >
            Sobre Mim
          </Text>
        </Heading>

        <Text
          lineHeight="2"
          textAlign="justify"
          style={{ textIndent: 20 }}
          color={
            colorMode === "light"
              ? colors.secundaryText.dark
              : colors.secundaryText.light
          }
        >
          Eu nasci em Juiz de Fora - MG, cidade localizada na Zona da Mata
          Mineira que possui um pouco mais de 577 mil habitantes e se localiza
          mais perto do Rio de Janeiro do que da capital Belo Horizonte.
        </Text>

        <Box display="flex" flexDirection="column" gap="2">
          <Image
            src={cityPic}
            alt="foto da cidade Juiz de Fora"
            className={css`
              border-radius: 16px;
            `}
          />
          <p>Juiz de Fora - MG</p>
        </Box>
        <Text
          lineHeight="2"
          textAlign="justify"
          style={{ textIndent: 20 }}
          color={
            colorMode === "light"
              ? colors.secundaryText.dark
              : colors.secundaryText.light
          }
        >
          Foz do iguacu foi com certeza uma das cidades mais lindas que eu ja
          estive, foi um privilégio morar lá por 10 anos. Cidade muito
          arborizada onde a presenca da natureza nao passa desapercebida em
          nenhum minuto. Foi lá onde fiz amigos com os quais tenho contato até
          os dias de hoje.
        </Text>

        <Box>
          <Image
            src={Foz}
            alt="foto da cidade de Foz de Iguacu"
            className={css`
              border-radius: 16px;
            `}
          />
          <p>Foz do Iguacu - PR</p>
        </Box>

        <Title fontSize="40px" py="10" pl="0">
          Timeline
        </Title>
        <TimeLine />
      </Stack>
    </ContainerBox>
  );
}
