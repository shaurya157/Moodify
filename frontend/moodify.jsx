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

  let song1 = {title: 'Strawberry Swing', artist: 'Coldplay',
            album: 'Death and all his friends', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478198878/220px-Coldplaystrawberryswing_j9emrx.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478198888/Coldplay_-_Strawberry_Swing_gmar7g.mp3',
            song_duration: '4:13', id: 1};
  let song2 = {title: 'Ignite', artist: 'Zedd',
            album: 'League of Legends', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478279715/zedd_ignite_huoobq.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478279730/Zedd-_IgniteWorlds_2016_-_League_of_Legends_yjxf6h.mp3',
            song_duration: '3:46', id: 3};
let song3 = {title: 'Viva la Vida', artist: 'Coldplay',
        album: 'Death and all his friends', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478198878/art_vivalavida_ed7e9i.jpg',
        audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478198769/Coldplay_-_Viva_La_Vida_eozpbm.mp3',
        song_duration: '4:02', id: 2};
store.dispatch(addSongToQueue(song1));
store.dispatch(addSongToQueue(song2));
store.dispatch(addSongToQueue(song3));

  ReactDOM.render(<Root store={store}/>, root);
});

// const success = (data) => console.log(data);
// const error = data => console.log(data);
// window.success = success;
// window.error = error;
// window.login = login;
// window.logout = logout;
// window.signup = signup;
