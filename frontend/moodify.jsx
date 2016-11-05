import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import {fetchSongs} from './util/songs_api_util';
// import {login, logout, signup, clearErrors} from './actions/session_actions';
// import {signup, login, logout} from './actions/session_actions';
import {addSongToQueue,
        deleteSongFromQueue,
        playSong,
        pauseSong,
        goForward,
        goBack
        } from './actions/audio_actions';
import {receiveAllSongs, requestAllSongs} from './actions/song_actions';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  window.requestAllSongs = requestAllSongs;
  if(window.currentUser){
    store = configureStore({session: {currentUser: window.currentUser}});
  } else {
    store = configureStore();
  }
  window.store = store;
  window.addSongToQueue = addSongToQueue;
  window.deleteSongFromQueue = deleteSongFromQueue;
  window.pauseSong = pauseSong;
  window.playSong = playSong;
  window.goForward = goForward;
  window.goBack = goBack;

  ReactDOM.render(<Root store={store}/>, root);
});

// const success = (data) => console.log(data);
// const error = data => console.log(data);
// window.success = success;
// window.error = error;
// window.login = login;
// window.logout = logout;
// window.signup = signup;
