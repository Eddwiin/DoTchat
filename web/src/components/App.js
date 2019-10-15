import React from 'react';
import './App.css';
import AppRouterComponent from './app.router';
import HeaderComponent from './layouts/header/header.component';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

export class App extends React.Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <HeaderComponent></HeaderComponent>
        <AppRouterComponent></AppRouterComponent>
      </ApolloProvider>
    )
  }
}

export default App;
