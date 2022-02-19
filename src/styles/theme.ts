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
        fontSize: "md",
        backgroundColor: mode(
          colors.background.dark,
          colors.background.light
        )(props),
        color: "gray.300",
        font_family: "Poppins, helvetica, sans-serif",
        a: {
          text_decoration: "none",
        },

        li: {
          listStyle: "none",
          text_decoration: "none",
        },
      },
    }),
  },
});
