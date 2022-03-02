import { useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
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
  background: ${colors.linear};
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
  return (
    <Box>
      <TimelineBox>
        <DotIcon />
        <TitleDot>
          <strong>1984 - Nascimento</strong>
        </TitleDot>
        <Line
          style={{
            borderLeftWidth: "2px",
            borderColor: colorMode === "light" ? "#A0A0A0" : "#2d3748",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            doloribus velit iste commodi dolorum excepturi voluptatem! Id
            aliquam, aperiam ipsum commodi, quod est cumque aspernatur
            architecto labore nesciunt, a ratione?
          </p>
        </Line>
      </TimelineBox>
      <TimelineBox>
        <DotIcon />
        <TitleDot>
          <strong>1984 - Nascimento</strong>
        </TitleDot>
        <Line
          style={{
            borderLeftWidth: "0px",
            borderColor: colorMode === "light" ? "#A0A0A0" : "#2d3748",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            doloribus velit iste commodi dolorum excepturi voluptatem! Id
            aliquam, aperiam ipsum commodi, quod est cumque aspernatur
            architecto labore nesciunt, a ratione?
          </p>
        </Line>
      </TimelineBox>
    </Box>
  );
};
