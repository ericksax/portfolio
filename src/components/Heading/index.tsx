import { Heading, HeadingProps, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { colors } from "../../styles/colors";

interface ChildrenProps extends HeadingProps {
  children: ReactNode;
}

export const Title = ({ children, ...rest }: ChildrenProps) => {
  return (
    <Heading as="h1" w="100%" p="8" {...rest}>
      <Text bgGradient={colors.linearGradient} bgClip="text" fontSize="48">
        {children}
      </Text>
    </Heading>
  );
};
