import { AppProps } from "next/app";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import gqlClient from "graphql/client";
import { ModalProvider } from "hooks/useModal";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={gqlClient}>
      <ModalProvider>
        <Head>
          <title>Paróquia Nossa Senhora do Brasil</title>
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ModalProvider>
    </ApolloProvider>
  );
}

export default App;
