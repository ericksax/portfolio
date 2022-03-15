import type { NextPage } from "next";
import { Text, Box } from "@chakra-ui/react";
import { ContainerBox } from "../components/ContainerBox";
import { Title } from "../components/Heading";
import { getSaudation } from "../utils/utils";

const Home: NextPage = () => {
  return (
    <ContainerBox>
      <Box>
        <Title>
          {getSaudation()}
          <br />
          Me chamo{" "}
          <span style={{ color: "white", backgroundColor: "#0f66d8" }}>
            Erick Freitas,
          </span>
          <br />
          seja bem vindo!
        </Title>
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
