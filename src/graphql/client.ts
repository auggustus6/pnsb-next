import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import {onError} from "@apollo/client/link/error"

const errorLink = onError(({ graphQLErrors, networkError})=> {
  if(graphQLErrors){
    graphQLErrors.map(({message, locations, path})=> alert(`GRAPHQL ERROR: ${message}`))
  }
})

const link =  from([
  errorLink,
  new HttpLink({uri: "https://adm-pnsb-6h995.ondigitalocean.app/graphql"})
])

const client = new ApolloClient({
  uri: "https://adm-pnsb-6h995.ondigitalocean.app/graphql",
  cache: new InMemoryCache(),
});

export default client;
