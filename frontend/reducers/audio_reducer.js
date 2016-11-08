import {ADD_SONG_TO_QUEUE,
        DELETE_SONG_FROM_QUEUE,
        PLAY_SONG,
        GO_FORWARD,
        GO_BACK,
        PAUSE_SONG,
        PLAY_PLAYLIST} from '../actions/audio_actions';
import merge from 'lodash/merge';

const _defaultState = {
  playqueue: [],
  playing: false,
  playedSongs: [],
  song: {}
};

// If any errors, check here for modifying state
const AudioReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  let newPlayqueue;

  switch (action.type) {
    case ADD_SONG_TO_QUEUE:
      return merge(newState,
        {playqueue: newState.playqueue.concat(action.song)});
    case DELETE_SONG_FROM_QUEUE:
      newPlayqueue = [];
      oldState.playqueue.forEach(song => {
        if(song.id !== action.id) {
          newPlayqueue = newPlayqueue.concat(song);
        }
      });
      newState.playqueue = newPlayqueue;
      return newState;
    case PLAY_SONG:
      if(action.song){
        return merge(newState, {song: action.song, playing: true});
      } else {
        return merge(newState, {playing: true});
      }
    case GO_FORWARD:
      if(oldState.playqueue.length > 0){
        newState.song = oldState.playqueue[0];
        if(oldState.playqueue.length > 1){
          newState.playqueue = oldState.playqueue.slice(1);
        } else {
          newState.playqueue = [];
        }
        newState.playedSongs = [...oldState.playedSongs, oldState.song];
        return newState;
      } else {
        return oldState;
      }
    case GO_BACK:
      if(oldState.playedSongs.length > 0){
        newState.song = oldState.playedSongs[0];
        newState.playqueue.unshift(oldState.song);
        newState.playedSongs = oldState.playedSongs.slice(1);

        return newState;
      } else {
        return oldState;
      }
    case PAUSE_SONG:
      return merge(newState, {playing: false});
    case PLAY_PLAYLIST:
      let playlist = action.playlist;
      return(
        {playqueue: playlist.songs.slice(1),
        playing: true,
        song: playlist.songs[0],
        playedSongs: []
      });
    default:
      return oldState;
  }
};

export default AudioReducer;
