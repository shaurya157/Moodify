import {receiveUser, requestUser, REQUEST_USER} from '../actions/user_actions';
import {fetchUser} from '../util/user_api_util';

const UserMiddleware = ({dispatch}) => next => action => {
  const receiveUserSuccess = (user) => dispatch(receiveUser(user));

  switch (action.type) {
    case REQUEST_USER:
      fetchUser(action.id, receiveUserSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
