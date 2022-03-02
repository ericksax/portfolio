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
import { css } from "@emotion/css";

export default function About(): JSX.Element {
  const { colorMode } = useColorMode();
  return (
    <Box as="main" mx="8" minHeight="100vh">
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
          <Text bgGradient={colors.linearGradient} bgClip="text" fontSize="48">
            Sobre Mim
          </Text>
        </Heading>

        <Stack
          spacing="8"
          as="section"
          borderColor={
            colorMode === "light"
              ? colors.lineBorder.dark
              : colors.lineBorder.ligth
          }
          borderRadius={16}
        >
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
            Eu nasci em Juiz de Fora - MG em junho de 1984, foi onde eu morei
            por 20 anos até me mudar para Foz do Iguacu no Paraná residindo por
            dez anos antes de retornar a terra natal.
          </Text>
          <Flex direction="column" my="8" mx="auto">
            <Image
              src={cityPic}
              alt="foto da cidade Juiz de Fora"
              height="380px"
              className={css`
                border-radius: 16px;
              `}
            ></Image>
            <p>Juiz de Fora - Mg</p>
          </Flex>
          <Heading as="h2" bgGradient={colors.linearGradient} bgClip="text">
            Timeline
          </Heading>
          <TimeLine />
        </Stack>
      </Stack>
    </Box>
  );
}
