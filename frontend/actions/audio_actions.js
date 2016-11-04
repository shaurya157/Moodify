export const ADD_SONG_TO_QUEUE = 'ADD_SONG_TO_QUEUE';
export const DELETE_SONG_FROM_QUEUE = 'DELETE_SONG_FROM_QUEUE';
export const ADD_PLAYLIST_TO_QUEUE = 'ADD_PLAYLIST_TO_QUEUE';
export const PLAY_SONG = 'PLAY_SONG';
export const GO_FORWARD = 'GO_FORWARD';
export const GO_BACK = 'GO_BACK';
export const PAUSE_SONG = 'PAUSE_SONG';
export const PLAY_PLAYLIST = 'PLAY_PLAYLIST';

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

export const playSong = (song) => ({
  type: PLAY_SONG,
  song
});

export const pauseSong = () => ({
  type: PAUSE_SONG
});

export const goForward = () => ({
  type: GO_FORWARD
});

export const goBack = () => ({
  type: GO_BACK
});

export const playPlaylist = (playlist) => ({
  type: PLAY_PLAYLIST,
  playlist
});
