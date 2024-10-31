import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "#0a0a0a",
        color: "#ffffff",
      },
      a: {
        color: "#ffffff",
      },
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
