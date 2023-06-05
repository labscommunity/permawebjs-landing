import { Manrope } from "next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle
} from "styled-components";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={manrope.className}>
      <Head>
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <meta name="theme-color" content="#231940" />
        <meta name="msapplication-TileColor" content="#231940" />
      </Head>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </div>
  );
}

const theme: DefaultTheme = {
  accent: "110, 120, 255",
  background: "35, 25, 64",
  primaryText: "255, 255, 255",
  secondaryText: "193, 188, 207"
};

const GlobalStyles = createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background-color: rgb(${props => props.theme.background});
    overflow-x: hidden;
  }

  ::selection {
    background-color: rgba(${(props) => props.theme.accent}, .35);
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }
`;
