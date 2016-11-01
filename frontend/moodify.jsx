import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import Root from './components/root';
// import {login, logout, signup} from './actions/session_actions';
import {signup, login, logout} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  const success = (data) => console.log(data);
  const error = data => console.log(data);

  window.success = success;
  window.error = error;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.store = store;
  ReactDOM.render(<h1>Hello!</h1>, root);
});
