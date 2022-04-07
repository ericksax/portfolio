import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const TimelineBox = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;

export const DotIcon = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 7.5px;
  background: ${colors.linearDot};
`;

export const Line = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-left: -8px;
  padding-left: 22px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 20px;

  p {
    text-align: justify;
    text-indent: 16px;
  }
`;

export const TitleDot = styled.div`
  position: absolute;
  top: 0px;
  left: 30px;
  transform: translateY(-20%);
`;
