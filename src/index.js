import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import rootSaga from './sagas'
import Index from './containers/Index'

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </div>
  </Router>
  </Provider>,
  document.getElementById('root')
);