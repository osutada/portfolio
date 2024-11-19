import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
