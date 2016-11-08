import {receiveAllPlaylists,
        REQUEST_ALL_PLAYLISTS,
        REQUEST_PLAYLIST,
        requestPlaylist,
        receivePlaylist,
        CREATE_PLAYLIST_FOLLOW,
        requestAllPlaylists} from '../actions/playlist_actions';

import {fetchPlaylists, fetchPlaylist, createPlaylistFollow} from '../util/playlist_api_util';

const PlaylistsMiddleware = ({dispatch}) => next => action => {
  const receiveAllPlaylistsSuccess = (playlists) => dispatch(receiveAllPlaylists(playlists));
  const receivePlaylistSuccess = (playlist) => dispatch(receivePlaylist(playlist));

  switch (action.type) {
    case REQUEST_ALL_PLAYLISTS:
      fetchPlaylists(receiveAllPlaylistsSuccess);
      return next(action);
    case REQUEST_PLAYLIST:
      fetchPlaylist(action.id, receivePlaylistSuccess);
      return next(action);
    case CREATE_PLAYLIST_FOLLOW:
      createPlaylistFollow(action.userId, action.playlistId);
      return next(action);
    default:
      return next(action);
  }
};

export default PlaylistsMiddleware;
