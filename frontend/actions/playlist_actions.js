export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const REQUEST_ALL_PLAYLISTS = 'REQUEST_ALL_PLAYLISTS';
export const REQUEST_PLAYLIST = 'REQUEST_PLAYLIST';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const CLEAR_PLAYLIST = 'CLEAR_PLAYLIST';

export const requestAllPlaylists = () => ({
  type: REQUEST_ALL_PLAYLISTS
});

export const receiveAllPlaylists = (playlists) => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
});

export const requestPlaylist = (id) => ({
  type: REQUEST_PLAYLIST,
  id
});

export const receivePlaylist = (playlist) => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const clearPlaylist = () => ({
  type: CLEAR_PLAYLIST
});
