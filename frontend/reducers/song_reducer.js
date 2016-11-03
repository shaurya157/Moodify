import {RECEIVE_ALL_SONGS} from '../actions/song_actions';
import merge from 'lodash/merge';

const _defaultState = [];

const SongsReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_SONGS:
      debugger;
      return action.songs;
    default:
      return oldState;
  }
};

export default SongsReducer;
