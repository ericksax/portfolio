import { colors } from "../../styles/colors";
import { Heading, Text, Stack, Spinner } from "@chakra-ui/react";
import { CardRepo } from "../../components/CardRepo";
import { Pagination } from "../../components/Pagination";
import { ContainerBox } from "../../components/ContainerBox";
import { usePageData } from "../../Hooks/usePageData";

export default function Projetcs(): JSX.Element {
  const {
    isError,
    isFetching,
    pagination,
    setCurrentPage,
    newArray,
    isLoading,
    CurrentPage,
  } = usePageData();

  return (
    <ContainerBox>
      <Stack
        as="main"
        w="100%"
        maxWidth="1024px"
        mx="auto"
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
          newArray?.map((repository) => (
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
