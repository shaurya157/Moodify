import {ADD_SONG_TO_QUEUE, DELETE_SONG_FROM_QUEUE, ADD_PLAYLIST_TO_QUEUE} from '../actions/play_queue_actions';
import merge from 'lodash/merge';

const _defaultState = [];

const PlayQueueReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case ADD_SONG_TO_QUEUE:
      newState = oldState.slice(0).concat(action.song);
      return newState;
    case DELETE_SONG_FROM_QUEUE:
      newState = [];
      oldState.forEach(song => {
        if(song.id !== action.id) {
          newState.push(song);
        }
      });

      return newState;
    case ADD_PLAYLIST_TO_QUEUE:
      newState = oldState.slice(0).concat(action.playlist);
      return newState;
    default:
      return _defaultState;
  }
};

export default PlayQueueReducer;
