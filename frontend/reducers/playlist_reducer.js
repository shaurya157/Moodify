import {RECEIVE_ALL_PLAYLISTS} from '../actions/playlist_actions';
import merge from 'lodash/merge';

const _defaultState = [];

const PlaylistsReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return action.playlists;
    default:
      return oldState;
  }
};

export default PlaylistsReducer;
