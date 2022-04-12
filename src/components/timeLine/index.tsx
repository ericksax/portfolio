import bb from "../../assets/chorando.png";
import Image from "next/image";
import timeData from "./jsonContentTimeline.json";
import { useState } from "react";
import { Button, Collapse, Icon, Text } from "@chakra-ui/react";
import { Box, DotIcon, Line, TitleDot, TimelineBox } from "./style";

export const TimeLine = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box>
      <Collapse startingHeight={150} in={show}>
        {timeData.content.map((data) => (
          <TimelineBox key={data.title}>
            <DotIcon />
            <TitleDot>
              <strong>
                {data.title}{" "}
                {data.title === "1984 - Nascimento" && (
                  <Image
                    src={bb}
                    height="20"
                    width="20"
                    alt="imagem de um bebe chorando"
                  />
                )}
              </strong>
            </TitleDot>
            <Line>
              <p>{data.contentLine}</p>
            </Line>
          </TimelineBox>
        ))}
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
