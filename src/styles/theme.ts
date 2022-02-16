import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      background: "#262626",
      text: "gray.100",
      secundaryText: "#a0a0a0",
      lineBorder: "#e2e1e118",
    },
  },
  styles: {
    global: {
      "html, body": {
        fontSize: "md",
        backgroundColor: "#262626",
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
