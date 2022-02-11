import type { AppProps } from "next/app";
import { Footer } from "../components/Footer";
import { GradientBar } from "../components/GradientBar";
import { Header } from "../components/Header";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GradientBar />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GradientBar />
    </>
  );
}

export default MyApp;
