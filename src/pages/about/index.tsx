import {
  Heading,
  Text,
  Box,
  Stack,
  useColorMode,
  Flex,
} from "@chakra-ui/react";

import { TimeLine } from "../../components/timeLine";
import { colors } from "../../styles/colors";
import Image from "next/image";
import cityPic from "../../../images/juizdefora.jpg";
import Foz from "../../assets/fozdoiguacu.jpg";
import { css } from "@emotion/css";
import { ContainerBox } from "../../components/ContainerBox";

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
        my="8"
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
          Eu nasci em Juiz de Fora - MG em junho de 1984, foi onde eu morei por
          20 anos até me mudar para Foz do Iguacu no Paraná residindo por dez
          anos antes de retornar a terra natal.
        </Text>

        <Box>
          <Image
            src={cityPic}
            alt="foto da cidade Juiz de Fora"
            height="380px"
            className={css`
              border-radius: 16px;
            `}
          ></Image>
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
            alt="cidade de Foz de Iguacu"
            className={css`
              border-radius: 16px;
            `}
          />
          <p>Foz do Iguacu - PR</p>
          <Text
            lineHeight="2"
            textAlign="justify"
            style={{ textIndent: 20 }}
            color={
              colorMode === "light"
                ? colors.secundaryText.dark
                : colors.secundaryText.light
            }
          ></Text>
        </Box>
        <Heading as="h2" bgGradient={colors.linearGradient} bgClip="text">
          Timeline
        </Heading>
        <TimeLine />
      </Stack>
    </ContainerBox>
  );
}
