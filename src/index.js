import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'
import App from './App';
import{SearchItems} from './components/reducers'

const logger = createLogger()
const store= createStore(SearchItems, applyMiddleware(logger))
ReactDOM.render(
  <Provider store={store} > <App /> </Provider>  ,
  document.getElementById('root')
);


