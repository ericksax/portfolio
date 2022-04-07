import type { NextPage } from "next";
import { Text, Box } from "@chakra-ui/react";
import { ContainerBox } from "../components/ContainerBox";

import { Saudation } from "../components/Saudation";

const Home: NextPage = () => {
  return (
    <ContainerBox>
      <Box>
        <Saudation />
        <Text py="4" px="8" textAlign="justify" style={{ textIndent: 20 }}>
          Sou um desenvolvedor front-end em ascenção. Aqui você vai encontrar um
          pouco da minha trajetória em busca do conhecimento e de uma construção
          de carreira no mundo das tecnologias web, pelas quais eu sou
          apaixonado.
        </Text>
      </Box>
    </ContainerBox>
  );
};

export default Home;
