import { Manrope } from "next/font/google";
import type { AppProps } from "next/app";
import ReactGA from "react-ga4";
import {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle
} from "styled-components";
import { useEffect } from "react";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // init analytics
    ReactGA.initialize("G-XGL84RGTS6");
  }, []);

  return (
    <div className={manrope.className}>
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
    background-color: rgb(${(props) => props.theme.background});
    overflow-x: hidden;
  }

  ::selection {
    background-color: rgba(${(props) => props.theme.accent}, .35);
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }
`;
