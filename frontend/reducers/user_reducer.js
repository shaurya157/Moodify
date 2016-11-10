import {RECEIVE_USER} from '../actions/user_actions';
import merge from 'lodash/merge';

const _defaultState = {
  user: {followedPlaylists:[], createdPlaylists:[], id:"", bio:"", profile_image_url:""},
  allUsers: []
};

const UsersReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);

  let newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_USER:
      newState.user = action.user;
      return newState;
    default:
      return newState;
  }
};

export default UsersReducer;
