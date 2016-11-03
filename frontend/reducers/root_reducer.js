import { combineReducers } from 'redux';
import SongsReducer from './song_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  songs: SongsReducer
});

export default RootReducer;
