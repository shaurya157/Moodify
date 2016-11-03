export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const REQUEST_ALL_SONGS = 'REQUEST_ALL_SONGS';

export const requestAllSongs = () => ({
  type: REQUEST_ALL_SONGS
});

export const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs: songs
});
