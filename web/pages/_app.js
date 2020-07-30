import '../styles/globals.scss'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../configs/api'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
