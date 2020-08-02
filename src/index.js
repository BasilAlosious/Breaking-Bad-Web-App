import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger'
import thunkMiddleWare from 'redux-thunk'
import App from './App';
import{SearchItems,requestItems} from './components/reducers'

const logger = createLogger()
const rootReducer = combineReducers({SearchItems,requestItems})
const store= createStore(rootReducer, applyMiddleware(logger,thunkMiddleWare))
ReactDOM.render(
  <Provider store={store} > <App /> </Provider>  ,
  document.getElementById('root')
);


