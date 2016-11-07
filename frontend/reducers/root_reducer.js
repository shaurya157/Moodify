import { combineReducers } from 'redux';
import SongsReducer from './song_reducer';
import SessionReducer from './session_reducer';
import AudioReducer from './audio_reducer';
import PlaylistsReducer from './playlist_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  songs: SongsReducer,
  currentSong: AudioReducer,
  playlists: PlaylistsReducer
});

export default RootReducer;
