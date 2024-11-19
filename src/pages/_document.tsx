import { ThemeProvider } from "next-themes";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="jp" suppressHydrationWarning>
      <Head />
      <body className="antialiased">
        <ThemeProvider>
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
