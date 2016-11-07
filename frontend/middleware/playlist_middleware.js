import {receiveAllPlaylists,
        REQUEST_ALL_PLAYLISTS,
        REQUEST_PLAYLIST,
        requestPlaylist,
        receivePlaylist} from '../actions/playlist_actions';

import {fetchPlaylists, fetchPlaylist} from '../util/playlist_api_util';

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
    default:
      return next(action);
  }
};

export default PlaylistsMiddleware;
