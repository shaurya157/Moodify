import React from 'react';
import { Provider } from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import AppContainer from './app/app_container';
import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session_form/session_form_container';
// import BrowseContainer from './browse/browse_container';
import PlaylistContainer from './playlist_modal/playlist_container';
import UserContainer from './user/user_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace("/app");
    }
  };

  const _requireLogin = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace("/login");
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path ='/' component={ SplashContainer } >
          <Route path='/signup' component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path='/login' component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        </Route>
        <Route path='/app' component={ AppContainer }>
          <Route path='/app/playlist/:playlistId' component={ PlaylistContainer }/>
          <Route path='/app/users/:userId' component={UserContainer} />
        </Route>
      </Router>
  </Provider>);
};

export default Root;
