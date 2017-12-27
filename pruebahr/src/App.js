import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import logo from './logo.svg';
import './App.css';
import reducers from './reducers';

import LoginForm from './components/LoginForm';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
          <LoginForm />
        </div>
      </Provider>
    );
  }
}

export default App;
