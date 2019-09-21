import React from 'react';
import './App.css';
import RouterComponent from './utils/router/router.component';
import HeaderComponent from './utils/header/header.component';
export class App extends React.Component {

  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <RouterComponent></RouterComponent>
      </div>
    )
  }
}

export default App;
