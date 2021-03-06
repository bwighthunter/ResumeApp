import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Home from './home/homeContainer.jsx';
import Resume from './resume/resumeContainer.jsx';

import HomeReducer from './home/homeReducer.js';
import ResumeReducer from './resume/resumeReducer.js';


// Add the reducer to your store on the `routing` key
export const store = createStore(
  combineReducers({
    home: HomeReducer,
    resume: ResumeReducer,
    routing: routerReducer
  }), undefined, window.devToolsExtension ? window.devToolsExtension() : undefined);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      { /* Tell the Router to use our enhanced history */ }
      <Router history={history}>
        <Route path="/" component={Home} />
        <Route path="/resume" component={Resume} />
      </Router>
    </Provider>,
    document.getElementById('app')
)};

render();
