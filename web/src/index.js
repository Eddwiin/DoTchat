import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import layoutReducer from './pages/auth/store/reducers/layout';
import { Provider } from 'react-redux';
import createSagaMiddleware from "redux-saga";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;


const rootReducer = combineReducers({
  authLayout: layoutReducer,
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
