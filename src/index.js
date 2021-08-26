
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// code for redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './service/reducers/index'
const store=createStore(rootReducer)//give any name instead of state
// 

ReactDOM.render(
  //provider helps to flow redux data in whole application
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
