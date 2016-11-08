import {RECEIVE_ALL_PLAYLISTS,
        PLAY_PLAYLIST,
        RECEIVE_PLAYLIST,
        CLEAR_PLAYLIST} from '../actions/playlist_actions';
import merge from 'lodash/merge';

const _defaultState = {
  allPlaylists: [],
  currPlaylist: {}
};

const PlaylistsReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return merge({}, oldState, {allPlaylists: action.playlists});
    case RECEIVE_PLAYLIST:
      return merge({}, oldState, {currPlaylist: action.playlist});
    case CLEAR_PLAYLIST:
      return merge({}, oldState, {currPlaylist: []});
    default:
      return oldState;
  }
};

export default PlaylistsReducer;
