import type { AppProps } from "next/app";
import { Footer } from "../components/Footer";
import { GradientBar } from "../components/GradientBar";
import { Header } from "../components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeModeProvider } from "../context/ThemeContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeModeProvider>
        <GradientBar />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <GradientBar />
      </ThemeModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
