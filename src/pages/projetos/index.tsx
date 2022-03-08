import { useEffect, useState } from "react";
import { colors } from "../../styles/colors";
import { Heading, Text, Stack, Spinner } from "@chakra-ui/react";
import { CardRepo } from "../../components/CardRepo";

import { Pagination } from "../../components/Pagination";
import { api } from "../../services/api";
import { useQuery } from "react-query";
import { ContainerBox } from "../../components/ContainerBox";

interface Repository {
  repo: string;
  description: string;
  link: string;
  image: string;
  owner: string;
  language: string;
}

export default function Projetcs(): JSX.Element {
  const [pagination, setPagination] = useState([] as number[]);
  const [newarray, setNewArray] = useState<Repository[] | undefined>([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const limit = 2;

  const { data, isFetching, isLoading, isError } = useQuery<Repository[]>(
    "pinnedRepos",
    async () => {
      const { data } = await api("?username=ericksax");
      const limit = 2;
      const Pages = Math.ceil(data.length / limit);
      const arrayPages = [];

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
    <ContainerBox>
      <Stack
        as="main"
        w="100%"
        maxWidth="1024px"
        mx="auto"
        mt={8}
        p="8"
        spacing="12"
        borderRadius="12"
      >
        <Heading as="h1">
          <Text
            bgGradient={colors.linearGradient}
            bgClip="text"
            fontSize="48"
            lineHeight="5rem"
          >
            Projetos
          </Text>
          {(!isLoading && isFetching) ?? <Spinner size="sm" ml="4" />}
        </Heading>

        {isError ? <Text> Aconteceu um erro ao buscar os dados! </Text> : null}

        {isLoading ? (
          <Spinner />
        ) : (
          newarray?.map((repository) => (
            <CardRepo key={repository.link} repository={repository} />
          ))
        )}
      </Stack>
      {isLoading || isFetching ? null : (
        <Pagination
          pagination={pagination}
          setCurrentPage={setCurrentPage}
          CurrentPage={CurrentPage}
        />
      )}
    </ContainerBox>
  );
}