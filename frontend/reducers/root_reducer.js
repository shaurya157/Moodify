import { combineReducers } from 'redux';
import SongsReducer from './song_reducer';
import SessionReducer from './session_reducer';
import AudioReducer from './audio_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  songs: SongsReducer,
  currentSong: AudioReducer
});

export default RootReducer;
