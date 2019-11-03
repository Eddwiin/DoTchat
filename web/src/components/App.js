import React from 'react';
import './App.css';
import AppRouterComponent from './app.router';
import HeaderComponent from './layouts/header.component';

export class App extends React.Component {

  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <AppRouterComponent></AppRouterComponent>
      </div>
    )
  }
}

export default App;
