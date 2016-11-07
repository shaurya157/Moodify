import {receiveAllPlaylists,
        REQUEST_ALL_PLAYLISTS} from '../actions/playlist_actions';
import {fetchPlaylists} from '../util/playlist_api_util';

const PlaylistsMiddleware = ({dispatch}) => next => action => {
  let success = (songs) => dispatch(receiveAllPlaylists(songs));

  switch (action.type) {
    case REQUEST_ALL_PLAYLISTS:
      fetchPlaylists(success);
      return next(action);
    default:
      return next(action);
  }
};

export default PlaylistsMiddleware;
