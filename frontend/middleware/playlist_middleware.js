import {receiveAllPlaylists,
        REQUEST_ALL_PLAYLISTS,
        REQUEST_PLAYLIST,
        receivePlaylist,
        CREATE_PLAYLIST_FOLLOW,
        REQUEST_FOLLOWED_PLAYLISTS,
        receiveFollowedPlaylists} from '../actions/playlist_actions';

import {fetchPlaylists,
        fetchPlaylist,
        createPlaylistFollow,
        fetchUserFollowedPlaylists} from '../util/playlist_api_util';

const PlaylistsMiddleware = ({dispatch}) => next => action => {
  const receiveAllPlaylistsSuccess = (playlists) => dispatch(receiveAllPlaylists(playlists));
  const receivePlaylistSuccess = (playlist) => dispatch(receivePlaylist(playlist));
  const receiveFollowedPlaylistsSuccess = (playlists) => dispatch(receiveFollowedPlaylists(playlists));

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
    case REQUEST_FOLLOWED_PLAYLISTS:
      fetchUserFollowedPlaylists(action.userId, receiveFollowedPlaylistsSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default PlaylistsMiddleware;
