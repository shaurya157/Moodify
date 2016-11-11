import React from 'react';
import { Provider } from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import AppContainer from './app/app_container';
import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session_form/session_form_container';
// import BrowseContainer from './browse/browse_container';
import PlaylistContainer from './playlist_modal/playlist_container';
import UserContainer from './user/user_container';
import {requestUser} from '../actions/user_actions';

const Root = ({ store }) => {
  const _requireLogin = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace("/");
    }
  };

  const _updateUsers = (nextState) => {
      store.dispatch(requestUser(parseInt(nextState.params.userId)));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path ='/' component={ SplashContainer } />
        <Route path='/app' component={ AppContainer } onEnter={_requireLogin}>
          <Route path='/app/playlist/:playlistId' component={ PlaylistContainer }/>
          <Route path='/app/users/:userId' component={UserContainer} onEnter={_updateUsers}>
          </Route>
        </Route>
      </Router>
  </Provider>);
};

export default Root;
