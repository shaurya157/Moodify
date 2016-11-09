import {receiveUser,
        requestUser,
        REQUEST_USER,
        CREATE_USER_FOLLOW,
        DELETE_USER_FOLLOW} from '../actions/user_actions';
import {fetchUser,
        createUserFollow,
        deleteUserFollow} from '../util/user_api_util';

const UserMiddleware = ({dispatch}) => next => action => {
  const receiveUserSuccess = (user) => dispatch(receiveUser(user));

  switch (action.type) {
    case REQUEST_USER:
      fetchUser(action.id, receiveUserSuccess);
      return next(action);
    case CREATE_USER_FOLLOW:
      createUserFollow(action.followerId, action.followeeId);
      dispatch(requestUser(action.followeeId));
      return next(action);
    case DELETE_USER_FOLLOW:
      deleteUserFollow(action.followerId, action.followeeId);
      dispatch(requestUser(action.followeeId));
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
