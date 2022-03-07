import type { NextPage } from "next";
import { Text, Box } from "@chakra-ui/react";
import { ContainerBox } from "../components/ContainerBox";
import { Title } from "../components/Heading";
import { getSaudation } from "../utils/utils";

const Home: NextPage = () => {
  return (
    <ContainerBox marginTop="40">
      <Box>
        <Title>
          {getSaudation()},
          <br />
          Seja bem vindo(a)
        </Title>
        <Text py="4" px="8" textAlign="justify">
          Me chamo Erick e sou um desenvolvedor front-end em ascenção. Aqui você
          vai encontrar um pouco da minha trajetória em busca do conhecimento e
          de uma construção de carreira no mundo das tecnologias web, pela qual
          eu sou apaixonado.
        </Text>
      </Box>
    </ContainerBox>
  );
};

export default Home;
