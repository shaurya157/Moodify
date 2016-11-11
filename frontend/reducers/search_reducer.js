import {RECEIVE_SEARCH, CLEAR_SEARCH} from '../actions/search_actions';
import merge from 'lodash/merge';

const _defaultState = {
  users: [],
  playlists: [],
  songs: []
};

const SearchReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_SEARCH:
      newState.users = action.users;
      newState.songs = action.songs;
      newState.playlists = action.playlists;

      return newState;
    case CLEAR_SEARCH:
      return _defaultState;
    default:
      return oldState;
  }
};

export default SearchReducer;
