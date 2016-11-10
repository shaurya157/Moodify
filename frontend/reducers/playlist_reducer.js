import {RECEIVE_ALL_PLAYLISTS,
        PLAY_PLAYLIST,
        RECEIVE_PLAYLIST,
        CLEAR_PLAYLIST,
        RECEIVE_USER_PLAYLISTS} from '../actions/playlist_actions';
import merge from 'lodash/merge';

const _defaultState = {
  allPlaylists: [],
  currPlaylist: {songs: [], description: "", id: '', playlist_image_url:"", title:"", username:"" },
  followedPlaylists: [],
  createdPlaylists: []
};

const PlaylistsReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      newState.allPlaylists = action.playlists;
      return newState;
    case RECEIVE_PLAYLIST:
      newState.currPlaylist = action.playlist;
      return newState;
    case CLEAR_PLAYLIST:
      newState.currPlaylist = _defaultState.currPlaylist;
      return newState;
    case RECEIVE_USER_PLAYLISTS:
    debugger;
      newState.followedPlaylists = action.followedPlaylists;
      newState.createdPlaylists = action.createdPlaylists;
      return newState;
    default:
      return oldState;
  }
};

export default PlaylistsReducer;
