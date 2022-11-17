import { AppProps } from "next/app";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import Head from "next/head";
import "./styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Paróquia Nossa Senhora do Brasil</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
