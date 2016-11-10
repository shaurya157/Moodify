import {receiveAllPlaylists,
        REQUEST_ALL_PLAYLISTS,
        REQUEST_PLAYLIST,
        receivePlaylist,
        CREATE_PLAYLIST_FOLLOW,
        REQUEST_USER_PLAYLISTS,
        DELETE_PLAYLIST_FOLLOW,
        receiveUserPlaylists,
        requestUserPlaylists,
        ADD_SONG_TO_PLAYLIST,
        DELETE_SONG_FROM_PLAYLIST} from '../actions/playlist_actions';

import {fetchPlaylists,
        fetchPlaylist,
        createPlaylistFollow,
        fetchUserPlaylists,
        deletePlaylistFollow,
        addSongToPlaylist,
        deleteSongFromPlaylist} from '../util/playlist_api_util';

const PlaylistsMiddleware = ({dispatch}) => next => action => {
  const receiveAllPlaylistsSuccess = (playlists) => dispatch(receiveAllPlaylists(playlists));
  const receivePlaylistSuccess = (playlist) => dispatch(receivePlaylist(playlist));
  const receiveUserPlaylistsSuccess = (playlists) => dispatch(receiveUserPlaylists(playlists));

  switch (action.type) {
    case REQUEST_ALL_PLAYLISTS:
      fetchPlaylists(receiveAllPlaylistsSuccess);
      return next(action);
    case REQUEST_PLAYLIST:
      fetchPlaylist(action.id, receivePlaylistSuccess);
      return next(action);
    case CREATE_PLAYLIST_FOLLOW:
      createPlaylistFollow(action.userId, action.playlistId);
      dispatch(requestUserPlaylists(action.userId));
      return next(action);
    case DELETE_PLAYLIST_FOLLOW:
      deletePlaylistFollow(action.userId, action.playlistId);
      dispatch(requestUserPlaylists(action.userId));
      return next(action);
    case REQUEST_USER_PLAYLISTS:
      fetchUserPlaylists(action.userId, receiveUserPlaylistsSuccess);
      return next(action);
    case ADD_SONG_TO_PLAYLIST:
      addSongToPlaylist(action.songId, action.playlistId);
      return next(action);
    case DELETE_SONG_FROM_PLAYLIST:
      deleteSongFromPlaylist(action.songId, action.playlistId);
      return next(action);
    default:
      return next(action);
  }
};

export default PlaylistsMiddleware;
