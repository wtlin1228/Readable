import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import rootSaga from './sagas';
import Index from './containers/Index';
import Category from "./containers/Category";
import PostDetail from "./containers/PostDetail";
import PostForm from "./containers/PostForm";

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/:category" component={Category} />
          <Route exact path="/:category/:post_id" component={PostDetail} something="foo"/>
          <Route exact path="/:category/:post_id/edit" component={PostForm}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);