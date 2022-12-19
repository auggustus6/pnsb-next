import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      alert(`GRAPHQL ERROR: ${message}`);
      console.error({ locations }, { path });
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_URI }),
]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
