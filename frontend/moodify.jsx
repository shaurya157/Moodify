import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import Root from './components/root';
import {login, logout, signup, clearErrors} from './actions/session_actions';
// import {signup, login, logout} from './actions/session_actions';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;

  window.logout = logout;
  if(window.currentUser){
    store = configureStore({session: {currentUser: window.currentUser}});
  } else {
    store = configureStore();
  }
  window.store = store;
  window.clearErrors = clearErrors;
  ReactDOM.render(<Root store={store}/>, root);
});

// const success = (data) => console.log(data);
// const error = data => console.log(data);
// window.success = success;
// window.error = error;
// window.login = login;
// window.logout = logout;
// window.signup = signup;
