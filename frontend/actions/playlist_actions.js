export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const REQUEST_ALL_PLAYLISTS = 'REQUEST_ALL_PLAYLISTS';
export const REQUEST_PLAYLIST = 'REQUEST_PLAYLIST';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const CLEAR_PLAYLIST = 'CLEAR_PLAYLIST';
export const CREATE_PLAYLIST_FOLLOW = 'CREATE_PLAYLIST_FOLLOW';
export const REQUEST_FOLLOWED_PLAYLISTS = 'REQUEST_FOLLOWED_PLAYLISTS';
export const RECEIVE_FOLLOWED_PLAYLISTS = 'RECEIVE_FOLLOWED_PLAYLISTS';
export const DELETE_PLAYLIST_FOLLOW = 'DELETE_PLAYLIST_FOLLOW';
export const ADD_SONG_TO_PLAYLIST = 'ADD_SONG_TO_PLAYLIST';
export const DELETE_SONG_FROM_PLAYLIST = 'DELETE_SONG_FROM_PLAYLIST';

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

export const createPlaylistFollow = (userId, playlistId) => ({
  type: CREATE_PLAYLIST_FOLLOW,
  userId,
  playlistId
});

export const requestFollowedPlaylists = (userId) => ({
  type: REQUEST_FOLLOWED_PLAYLISTS,
  userId
});

export const receiveFollowedPlaylists = (playlists) => ({
  type: RECEIVE_FOLLOWED_PLAYLISTS,
  playlists
});

export const deletePlaylistFollow = (userId, playlistId) => ({
  type: DELETE_PLAYLIST_FOLLOW,
  userId,
  playlistId
});

export const addSongToPlaylist = (songId, playlistId) => ({
  type: ADD_SONG_TO_PLAYLIST,
  songId,
  playlistId
});

export const deleteSongFromPlaylist = (songId, playlistId) => ({
  type: DELETE_SONG_FROM_PLAYLIST,
  songId,
  playlistId
});
