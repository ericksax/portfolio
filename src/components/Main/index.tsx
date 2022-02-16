import styles from "./styles.module.scss";
import Image from "next/image";
import { Box, Heading, Flex, Text, Img, Stack } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

export const Main = () => {
  return (
    <Stack
      as="main"
      w="100%"
      maxWidth="1024px"
      mx="auto"
      mt={16}
      p="2rem"
      spacing="16"
      borderWidth="0.5px"
      borderRadius="16"
      borderColor={theme.colors.brand.lineBorder}
    >
      <Heading as="h2">
        <Text
          bgGradient="linear(to-r, #2d3bb9, #FF0080, #ff009d)"
          bgClip="text"
          fontSize="48"
        >
          Projetos
        </Text>
      </Heading>
      <Flex
        as="section"
        align="center"
        justify="space-beween"
        border="sm white 1px"
        borderWidth="0.1px"
        borderRadius={16}
        borderColor={theme.colors.brand.lineBorder}
      >
        <Box as="aside" borderRadius="md white">
          <Text textAlign="justify" p="16" lineHeight="8" letterSpacing={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            laborum tempora provident perspiciatis consectetur quia at enim
            aliquid assumenda libero cupiditate quidem veniam perferendis fuga
            debitis repellat recusandae, suscipit sit!
          </Text>
        </Box>
        <Img
          p={4}
          src="https://github.com/ericksax.png"
          alt="erick"
          width={64}
          height={64}
          borderRadius="50%"
        />
      </Flex>
      <Flex
        as="section"
        align="center"
        justify="space-beween"
        border="sm white 1px"
        borderWidth="0.1px"
        borderRadius={16}
        borderColor={theme.colors.brand.lineBorder}
      >
        <Box as="aside" borderRadius="md white">
          <Text textAlign="justify" p="16" lineHeight="8" letterSpacing={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            laborum tempora provident perspiciatis consectetur quia at enim
            aliquid assumenda libero cupiditate quidem veniam perferendis fuga
            debitis repellat recusandae, suscipit sit!
          </Text>
        </Box>
        <Img
          p={4}
          src="https://github.com/ericksax.png"
          alt="erick"
          width={64}
          height={64}
          borderRadius="50%"
        />
      </Flex>
      <Flex
        as="section"
        align="center"
        justify="space-beween"
        border="sm white 1px"
        borderWidth="0.1px"
        borderRadius={16}
        borderColor={theme.colors.brand.lineBorder}
      >
        <Box as="aside" borderRadius="md white">
          <Text textAlign="justify" p="16" lineHeight="8" letterSpacing={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            laborum tempora provident perspiciatis consectetur quia at enim
            aliquid assumenda libero cupiditate quidem veniam perferendis fuga
            debitis repellat recusandae, suscipit sit!
          </Text>
        </Box>
        <Img
          p={4}
          src="https://github.com/ericksax.png"
          alt="erick"
          width={64}
          height={64}
          borderRadius="50%"
        />
      </Flex>
      <Flex
        as="section"
        align="center"
        justify="space-beween"
        border="sm white 1px"
        borderWidth="0.1px"
        borderRadius={16}
        borderColor={theme.colors.brand.lineBorder}
      >
        <Box as="aside" borderRadius="md white">
          <Text textAlign="justify" p="16" lineHeight="8" letterSpacing={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            laborum tempora provident perspiciatis consectetur quia at enim
            aliquid assumenda libero cupiditate quidem veniam perferendis fuga
            debitis repellat recusandae, suscipit sit!
          </Text>
        </Box>
        <Img
          p={4}
          src="https://github.com/ericksax.png"
          alt="erick"
          width={64}
          height={64}
          borderRadius="50%"
        />
      </Flex>
    </Stack>
  );
};
