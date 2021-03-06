import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {requestSearch} from './actions/search_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if(window.currentUser){
    store = configureStore({session: {currentUser: window.currentUser}});
  } else {
    store = configureStore();
  }

  window.requestSearch = requestSearch;
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});

// const success = (data) => console.log(data);
// const error = data => console.log(data);
// window.success = success;
// window.error = error;
// window.login = login;
// window.logout = logout;
// window.signup = signup;
