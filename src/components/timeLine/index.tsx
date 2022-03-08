import { Button, Collapse, Text, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";
import bb from "../../assets/chorando.png";
import { colors } from "../../styles/colors";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const TimelineBox = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;

const DotIcon = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 7.5px;
  background: ${colors.linearDot};
`;

const Line = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-left: -8px;
  padding-left: 22px;
  padding-top: 10px;
  padding-bottom: 20px;
`;

const TitleDot = styled.div`
  position: absolute;
  top: 0px;
  left: 30px;
  transform: translateY(-20%);
`;

export const TimeLine = () => {
  const { colorMode } = useColorMode();
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box>
      <Collapse startingHeight={100} in={show}>
        <TimelineBox>
          <DotIcon />
          <TitleDot>
            <strong>Juventude</strong>
          </TitleDot>
          <Line
            style={{
              borderLeftWidth: "2px",
              borderColor: colorMode === "light" ? "#A0A0A0" : "#2d3748",
            }}
          >
            <p>
              Ainda no Colégio Militar aprendeu música e passou entáo a tocar
              clarinete na banda de música do colégio militar. Herdou as
              habilidades musicais de seu pai que na época era maestro regente
              da banda militar do Exército.
            </p>
          </Line>
        </TimelineBox>
        <TimelineBox>
          <DotIcon />
          <TitleDot>
            <strong>Adolescencia</strong>
          </TitleDot>
          <Line
            style={{
              borderLeftWidth: "2px",
              borderColor: colorMode === "light" ? "#A0A0A0" : "#2d3748",
            }}
          >
            <p>
              Sempre foi um adolescente tranquilo, gostava muito de video game e
              andava de bicicleta. Nesta época tinha suas obrigacoes escolares,
              aos 14 anos Ingressou no colégio Militar de Juiz de Fora- MG.
              Ganhou de presente neste ano o primeiro computador, nao soube
              equilibrar com os estudos e as horas que gastava na frente do
              computador lhe renderam um baixo desempenho na escola.
            </p>
          </Line>
        </TimelineBox>
        <TimelineBox>
          <DotIcon />
          <TitleDot>
            <strong>Infancia</strong>
          </TitleDot>
          <Line
            style={{
              borderLeftWidth: "2px",
              borderColor: colorMode === "light" ? "#A0A0A0" : "#2d3748",
            }}
          >
            <p>
              Erick vive uma infancia tranquila no bairro Santa Rita, a casa de
              seus pais ficava em uma rua de pedra o que facilitava muito as
              brincadeiras, pique-pega, pique esconde etc...
            </p>
          </Line>
        </TimelineBox>
        <TimelineBox>
          <DotIcon />
          <TitleDot>
            <strong>
              1984 - Nascimento{" "}
              <Image src={bb} alt="emoji de Bebe" height="25" width="25" />{" "}
            </strong>
          </TitleDot>
          <Line
            style={{
              borderLeftWidth: "0px",
              borderColor: colorMode === "light" ? "#A0A0A0" : "#2d3748",
            }}
          >
            <p>
              Em 1984 nasce Erick de Freitas Silva no hospital geral do Exército
              de Juiz de Fora - MG
            </p>
          </Line>
        </TimelineBox>
      </Collapse>
      <Button
        bg="transparent"
        mt="4"
        mx="auto"
        onClick={handleToggle}
        size="small"
      >
        <Text>Ver {show ? "menos" : "mais"}</Text>
      </Button>
    </Box>
  );
};
