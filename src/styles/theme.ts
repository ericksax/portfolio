import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";
import { colors } from "./colors";

interface ModeProps {
  props: Dict<any> | StyleFunctionProps;
}

export const theme = extendTheme({
  styles: {
    global: (props: ModeProps) => ({
      "html, body": {
        fontSize: "lg",
        backgroundColor: mode(
          colors.background.dark,
          colors.background.light
        )(props),
        color: "gray.300",
        font_family: "Poppins, helvetica, sans-serif",
        p: {
          color: mode(
            colors.secundaryText.dark,
            colors.secundaryText.light
          )(props),
        },
        strong: {
          color: mode(
            colors.secundaryText.dark,
            colors.secundaryText.light
          )(props),
        },
      },
      li: {
        a: {
          letterSpacing: 2,
          _hover: {
            textDecoration: "underline",
            color: mode("white", "black")(props),
          },
        },
      },
    }),
  },
});
