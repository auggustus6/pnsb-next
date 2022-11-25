import { AppProps } from "next/app";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import gqlClient from "graphql/client";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={gqlClient}>
      <Head>
        <title>Paróquia Nossa Senhora do Brasil</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
