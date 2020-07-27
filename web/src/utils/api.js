import axios from "axios";
import { ApolloClient, InMemoryCache } from '@apollo/client';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`,
  responseType: "json"
});

const apolloClient = new ApolloClient({
  uri: `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/graphql`,
  cache: new InMemoryCache()
})

// export default axios.create({
//   baseURL: `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`,
//   responseType: "json"
// });


export { api, apolloClient }