import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { customSwal } from "utils/customSwal";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      customSwal({
        title: `GRAPHQL ERROR: ${message}`,
        text: JSON.stringify(locations),
        icon: "error",
        confirmButtonText: "Ok",
      });
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
