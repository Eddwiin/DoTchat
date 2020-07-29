import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/graphql`,
  cache: new InMemoryCache()
})


export default apolloClient;