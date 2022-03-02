import { useEffect, useState } from "react";
import { colors } from "../../styles/colors";
import { Box, Heading, Text, Stack, Spinner } from "@chakra-ui/react";
import { CardRepo } from "../CardRepo";

import { Pagination } from "../../components/Pagination";
import { api } from "../../services/api";
import { useQuery } from "react-query";

interface Repository {
  repo: string;
  description: string;
  link: string;
  image: string;
  owner: string;
  language: string;
}

export const Main = (): JSX.Element => {
  const [pagination, setPagination] = useState([] as number[]);
  const [newarray, setNewArray] = useState<Repository[] | undefined>([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const limit = 2;

  const { data, isFetching, isLoading } = useQuery<Repository[]>(
    "pinnedRepos",
    async () => {
      const { data } = await api("?username=ericksax");
      const limit = 2;
      const arrayPages = [];
      const Pages = Math.ceil(data.length / limit);

      for (let i = 1; i <= Pages; i++) {
        arrayPages.push(i);
      }

      setPagination([...arrayPages]);

      return data;
    }
  );

  useEffect(() => {
    const pageStart = Number(CurrentPage - 1) * limit;
    const pageEnd = pageStart + limit;

    const newarray = data?.slice(pageStart, pageEnd);

    setNewArray(newarray);
  }, [data, CurrentPage]);

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
        borderRadius="16"
      >
        <Heading as="h2">
          <Text bgGradient={colors.linearGradient} bgClip="text" fontSize="48">
            Projetos
            {(!isLoading && isFetching) ?? <Spinner size="sm" ml="4" />}
          </Text>
        </Heading>
        {isLoading ? (
          <Spinner />
        ) : (
          newarray?.map((repository) => (
            <CardRepo key={repository.link} repository={repository} />
          ))
        )}
      </Stack>
      <Pagination
        pagination={pagination}
        setCurrentPage={setCurrentPage}
        CurrentPage={CurrentPage}
      />
    </Box>
  );
};
