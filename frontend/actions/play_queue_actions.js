export const ADD_SONG_TO_QUEUE = 'ADD_SONG_TO_QUEUE';
export const DELETE_SONG_FROM_QUEUE = 'DELETE_SONG_FROM_QUEUE';
export const ADD_PLAYLIST_TO_QUEUE = 'ADD_PLAYLIST_TO_QUEUE';

export const addSongToQueue = (song) => ({
  type: ADD_SONG_TO_QUEUE,
  song
});

export const deleteSongFromQueue = (id) => ({
  type: DELETE_SONG_FROM_QUEUE,
  id
});

export const addPlaylistToQueue = (playlist) => ({
  type: ADD_PLAYLIST_TO_QUEUE,
  playlist
});
