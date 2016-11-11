export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const requestSearch = (query) => ({
  type: REQUEST_SEARCH,
  query
});

export const receiveSearch = (results) => ({
  type: RECEIVE_SEARCH,
  songs: results.songs,
  playlists: results.playlists,
  users: results.users
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});
