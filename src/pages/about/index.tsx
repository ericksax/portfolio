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
        spacing={16}
        as="section"
        w="100%"
        maxW="1024px"
        mt="16"
        mx="auto"
        borderWidth="1px"
        borderColor={
          colorMode === "light"
            ? colors.lineBorder.dark
            : colors.lineBorder.ligth
        }
        borderRadius={16}
        p={8}
        my="16"
      >
        <Heading as="h2" w="100%">
          <Text bgGradient={colors.linearGradient} bgClip="text" fontSize="48">
            Sobre Mim
          </Text>
        </Heading>

        <Box
          as="section"
          borderWidth="1px"
          borderColor={
            colorMode === "light"
              ? colors.lineBorder.dark
              : colors.lineBorder.ligth
          }
          borderRadius={16}
          p="8"
        >
          <Text
            lineHeight="2"
            letterSpacing="2px"
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
          <Flex direction="column" my="8" width="780px" mx="auto">
            <Image
              src={cityPic}
              alt="foto da cidade Juiz de Fora"
              height="380px"
              className={css`
                border-radius: 16px;
              `}
            ></Image>
            Juiz de Fora - Mg
          </Flex>

          <TimeLine />
        </Box>
      </Stack>
    </Box>
  );
}
