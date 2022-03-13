import { Box, BoxProps } from "@chakra-ui/react";

import { ReactNode } from "react";

interface ContainerProps extends BoxProps {
  children: ReactNode;
}

export const ContainerBox = ({ children, ...rest }: ContainerProps) => {
  return (
    <Box as="main" mx="auto" my="" minHeight="100vh" maxWidth="980px" {...rest}>
      {children}
    </Box>
  );
};
