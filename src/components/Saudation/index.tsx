import { Title } from "../Heading/index";
import { getSaudation } from "../../utils/utils";
import { CustomSpan } from "./style";

export const Saudation = () => {
  return (
    <Title>
      {getSaudation()}
      <br />
      Me chamo <CustomSpan>Erick Freitas,</CustomSpan>
      <br />
      seja bem vindo!
    </Title>
  );
};
