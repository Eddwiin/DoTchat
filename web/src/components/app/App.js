import React from 'react';
import { Router, Link} from 'react-router-dom';
import './App.css';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }

  render() {

    return (
      <div>
        <ul>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <li>
            <Link to="/auth/registration">Registration</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default App;
