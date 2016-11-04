import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT, CLEAR_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case CLEAR_ERRORS:
      return _defaultState;
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {currentUser: action.currentUser, errors: []});
    case RECEIVE_ERRORS:
    return merge({}, oldState, {
      errors: action.errors.responseJSON
    });
    case LOGOUT:
      return _defaultState;
    default:
      return oldState;
  }
};


export default SessionReducer;
