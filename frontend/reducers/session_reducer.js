import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT, CLEAR_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case CLEAR_ERRORS:
      return _defaultState;
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser, errors: []});
    case RECEIVE_ERRORS:
    return merge({}, state, {
      errors: action.errors.responseJSON
    });
    case LOGOUT:
      return _defaultState;
    default:
      return state;
  }
};


export default SessionReducer;
