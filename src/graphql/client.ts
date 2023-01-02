import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map((result) => {
      // customSwal({
      //   title: `GRAPHQL ERROR: ${message}`,
      //   text: JSON.stringify(locations),
      //   icon: "error",
      //   confirmButtonText: "Ok",
      // });
      console.log({ error: result });
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://adm-pnsb-6h995.ondigitalocean.app/graphql" }),
]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
