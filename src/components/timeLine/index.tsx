import bb from "../../assets/chorando.png";
import Image from "next/image";
import { useState } from "react";
import { Button, Collapse, Text, useColorMode } from "@chakra-ui/react";
import { Box, DotIcon, Line, TitleDot, TimelineBox } from "./style";

export const TimeLine = () => {
  const { colorMode } = useColorMode();
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box>
      <Collapse startingHeight={380} in={show} endingHeight={680}>
        <div>
          <TimelineBox>
            <DotIcon />
            <TitleDot>
              <strong>Atualmente</strong>
            </TitleDot>
            <Line
              style={{
                borderLeftWidth: "2px",
                borderColor: colorMode === "light" ? "#A0A0A0" : "#2d3748",
              }}
            >
              <p>
                Apaixonado por tecnologia e após 10 anos de careira na área da
                saúde, decide em 2019 ingressar na faculdade de Análise e
                desenvolvimento de sistemas. Descobre que a tecnologia e que
                principalmente o desenvolvimento web é o que ele mais gosta de
                fazer. Desde então ele vem se aprimorando e garantindo
                conhecimentos no rico e vasto ambiente de desenvolvimento web.
              </p>
            </Line>
          </TimelineBox>
          <TimelineBox>
            <DotIcon />
            <TitleDot>
              <strong>Vida Adulta</strong>
            </TitleDot>
            <Line
              style={{
                borderLeftWidth: "2px",
                borderColor: colorMode === "light" ? "#A0A0A0" : "#2d3748",
              }}
            >
              <p>
                Após terminar o ensino médio ingressou na faculdade de farmácia
                em Foz do Iguaçu, cidade em que seu pai teria sido transferido,
                não digo que foi uma desisão errada, ele foi muito feliz em
                trilhar esse caminho mas alguma coisa fazia o seu coração bater
                ainda mais forte, o amor pela tecnologia e a carreira no
                desenvolvimento de software.
              </p>
            </Line>
          </TimelineBox>
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
                Ainda no Colégio Militar aprendeu música e passou então a tocar
                clarinete na banda de música. Herdou as habilidades musicais de
                seu pai que na época era maestro regente da banda militar do
                Exército.
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
                Sempre foi um adolescente tranquilo, gostava muito de video game
                e andava de bicicleta. Nesta época tinha suas obrigacões
                escolares, aos 14 anos Ingressou no colégio Militar de Juiz de
                Fora- MG. Ganhou de presente neste ano o primeiro computador,
                não soube equilibrar com os estudos e as horas que gastava na
                frente do computador lhe renderam um baixo desempenho na escola.
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
                Erick vive uma infancia tranquila no bairro Santa Rita, a casa
                de seus pais ficava em uma rua de pedra o que facilitava muito
                as brincadeiras, pique-pega, pique esconde etc...
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
                Em 1984 nasce Erick de Freitas Silva no hospital geral do
                Exército de Juiz de Fora - MG
              </p>
            </Line>
          </TimelineBox>
        </div>
      </Collapse>
      <Button
        bg="transparent"
        mt="4"
        mx="auto"
        variant="teal"
        onClick={handleToggle}
        size="small"
      >
        <Text
          _hover={{
            color: "gray.300",
            textDecoration: "underline",
          }}
        >
          Ver {show ? "menos" : "mais"}
        </Text>
      </Button>
    </Box>
  );
};
