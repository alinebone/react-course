import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import combineReducers from './reducers/index';

ReactDOM.render(
  <Provider store={createStore(combineReducers)}>
    <App/>
  </Provider>
  ,
  document.querySelector('#root')
);