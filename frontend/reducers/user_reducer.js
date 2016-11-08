import {RECEIVE_USER} from '../actions/user_actions';
import merge from 'lodash/merge';

const _defaultState = {
  user: {},
  allUsers: []
};

const UsersReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, oldState, {user: action.user});
    default:
      return oldState;
  }
};

export default UsersReducer;
