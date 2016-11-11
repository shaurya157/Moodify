import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT, CLEAR_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentUser: {},
  errors: []
};

const SessionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch (action.type) {
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors.responseJSON;
      return newState;
    case LOGOUT:
      return _defaultState;
    default:
      return oldState;
  }
};


export default SessionReducer;
