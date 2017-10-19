import 'es6-shim'; // yeah, polyfill all the things !!!
import 'whatwg-fetch'; // yeah, polyfill all the things !!!
import Symbol from 'es-symbol';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReviewsApp } from './components';
import './index.css';
import { reducer as sematable } from 'sematable';

if (!window.Symbol) {
  window.Symbol = Symbol; // yeah, polyfill all the things !!!
}

const root = '/';

const store = createStore(
  combineReducers({ ...reducers,sematable }),
  applyMiddleware(thunk)
);

ReactDOM.render((
  <Provider store={store}>
    <Router basename={root}>
      <ReviewsApp />
    </Router>
  </Provider>
), document.getElementById('root'));
