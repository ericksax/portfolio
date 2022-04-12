import type { AppProps } from "next/app";
import { Footer } from "../components/Footer";
import { GradientBar } from "../components/GradientBar";
import { Header } from "../components/Header";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GradientBar />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <GradientBar />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
