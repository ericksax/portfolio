import { colors } from "../../styles/colors";
import { CardFooter } from "../CardFooter";
import {
  Box,
  Flex,
  HStack,
  Img,
  SimpleGrid,
  Text,
  useColorMode,
  Heading,
} from "@chakra-ui/react";

interface Repository {
  repository: {
    repo: string;
    description: string;
    link: string;
    image: string;
    owner: string;
    language: string;
  };
}

export const CardRepo = ({ repository }: Repository) => {
  const { colorMode } = useColorMode();
  const IsColorLight = colorMode === "light";

  return (
    <HStack
      key={repository.link}
      as="section"
      align="center"
      w="100%"
      h="100%"
      justify="space-around"
      borderWidth="1px"
      borderRadius={16}
      borderColor={
        IsColorLight ? colors.lineBorder.dark : colors.lineBorder.ligth
      }
    >
      <SimpleGrid minChildWidth="180px">
        <Box
          flexDirection="column"
          as="aside"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="100%"
          h="100%"
          p={["6", "8"]}
        >
          <Heading size="4" marginBottom="5">
            {repository.repo}
          </Heading>
          <Text
            textAlign="justify"
            lineHeight="6"
            letterSpacing={2}
            color={
              IsColorLight
                ? colors.secundaryText.dark
                : colors.secundaryText.light
            }
          >
            {repository.description}
          </Text>
        </Box>
        <Flex direction="column" p={["6", "8"]} w="100" h="100%" gap={4}>
          <Box display="flex" justifyContent="center">
            <Img src={repository.image} alt="erick" borderRadius="12" />
          </Box>
          <CardFooter repository={repository} />
        </Flex>
      </SimpleGrid>
    </HStack>
  );
};
