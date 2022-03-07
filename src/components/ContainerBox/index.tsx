import { Box, BoxProps } from "@chakra-ui/react";

import { ReactNode } from "react";

interface ContainerProps extends BoxProps {
  children: ReactNode;
}

export const ContainerBox = ({ children, ...rest }: ContainerProps) => {
  return (
    <Box
      as="main"
      mx="auto"
      my="8"
      minHeight="100vh"
      maxWidth="1024px"
      {...rest}
    >
      {children}
    </Box>
  );
};
