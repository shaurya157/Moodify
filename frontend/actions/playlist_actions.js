export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const REQUEST_ALL_PLAYLISTS = 'REQUEST_ALL_PLAYLISTS';

export const requestAllPlaylists = () => ({
  type: REQUEST_ALL_PLAYLISTS
});

export const receiveAllPlaylists = (playlists) => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
});
