import { combineReducers } from 'redux';
import SongsReducer from './song_reducer';
import SessionReducer from './session_reducer';
import PlayQueueReducer from './play_queue_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  songs: SongsReducer,
  playqueue: PlayQueueReducer
});

export default RootReducer;
