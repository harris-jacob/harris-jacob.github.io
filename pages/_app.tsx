import { css } from "@emotion/css";
import { Global, Theme, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Header } from "../components/Header";
import { darkTheme, injectGlobals, lightTheme } from "../theme";

injectGlobals();

function MyApp({ Component, pageProps }: AppProps) {
  const [isLight, setIsLight] = useState(true);
  const theme = isLight ? lightTheme : darkTheme;
  const styles = makeStyles(theme);

  const toggleTheme = () => setIsLight((s) => !s);

  return (
    <div className={styles.container}>
      <Header toggleTheme={toggleTheme} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

const makeStyles = (theme: Theme) => ({
  container: css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.background};
  `,
});

export default MyApp;
