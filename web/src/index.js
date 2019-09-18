import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthenticatePage } from './pages/authenticate.page';
import 'bootstrap/dist/css/bootstrap.min.css';

const routing = (
  <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/auth/:action" component={AuthenticatePage} />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
