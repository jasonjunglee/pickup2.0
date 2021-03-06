import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = compose(applyMiddleware(thunk, promise))(createStore);

const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('app'));