import { combineReducers } from 'redux';
import SongsReducer from './song_reducer';
import SessionReducer from './session_reducer';
import AudioReducer from './audio_reducer';
import PlaylistsReducer from './playlist_reducer';
import UsersReducer from './user_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  songs: SongsReducer,
  currentSong: AudioReducer,
  playlists: PlaylistsReducer,
  users: UsersReducer,
  search: SearchReducer
});

export default RootReducer;
