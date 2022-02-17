import { extendTheme } from "@chakra-ui/react";
import { colors } from "../styles/colors";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontSize: "md",
        backgroundColor: colors.background.light,
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
    },
  },
});
