import React from 'react';
import { Provider } from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import App from './app/app';
import SessionFormContainer from './session_form/session_form_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace("/");
    }
  };

  const _requireLogin = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace("/login");
    }
  };

  return (<Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path='signup' component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path='login' component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
      </Route>
    </Router>
  </Provider>);
};

export default Root;
