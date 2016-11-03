import {receiveAllSongs, REQUEST_ALL_SONGS} from '../actions/song_actions';
import {fetchSongs} from '../util/songs_api_util';

const SongsMiddleware = ({dispatch}) => next => action => {
  let success = (songs) => dispatch(receiveAllSongs(songs));

  switch (action.type) {
    case REQUEST_ALL_SONGS:
      fetchSongs(success);
      return next(action);
    default:
      return next(action);
  }
};

export default SongsMiddleware;
