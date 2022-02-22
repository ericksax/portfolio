import { useEffect, useState } from "react";
import { colors } from "../../styles/colors";

import {
  Box,
  Heading,
  Flex,
  Text,
  Img,
  Stack,
  useColorMode,
  Spinner,
} from "@chakra-ui/react";

interface Repository {
  repo: string;
  description: string;
  link: string;
  image: string;
  owner: string;
}

export const Main = (): JSX.Element => {
  const { colorMode } = useColorMode();
  const IsColorLight = colorMode === "light";

  const [repos, setRepos] = useState<Repository[]>();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetch("https://gh-pinned-repos.egoist.sh/?username=ericksax")
      .then((response) => response.json())
      .then((response) => {
        setRepos([...response]);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return (
    <Box as="main" mx="8" minHeight="100vh">
      <Stack
        as="main"
        w="100%"
        maxWidth="1024px"
        mx="auto"
        mt={16}
        p="8"
        spacing="16"
        borderWidth="1px"
        borderRadius="16"
        borderColor={
          IsColorLight ? colors.lineBorder.dark : colors.lineBorder.ligth
        }
      >
        <Heading as="h2">
          <Text bgGradient={colors.linearGradient} bgClip="text" fontSize="48">
            Projetos
          </Text>
        </Heading>
        {isFetching ? (
          <Spinner />
        ) : (
          repos?.map((repo) => {
            return (
              <Flex
                key={repo.link}
                as="section"
                align="center"
                w="100%"
                h="300px"
                justify="space-between"
                borderWidth="1px"
                borderRadius={16}
                borderColor={
                  IsColorLight
                    ? colors.lineBorder.dark
                    : colors.lineBorder.ligth
                }
              >
                <Box
                  w="50%"
                  as="aside"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text
                    textAlign="justify"
                    p="12"
                    lineHeight="8"
                    letterSpacing={2}
                    color={
                      IsColorLight
                        ? colors.secundaryText.dark
                        : colors.secundaryText.light
                    }
                  >
                    {repo.description}
                  </Text>
                </Box>

                <Box w="50%" display="flex" justifyContent="center" p="12">
                  <Img
                    src={repo.image}
                    alt="erick"
                    w="350px"
                    h="180px"
                    borderRadius="12"
                  />
                </Box>
              </Flex>
            );
          })
        )}
      </Stack>
    </Box>
  );
};
