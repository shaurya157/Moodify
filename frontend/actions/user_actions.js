export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const CREATE_USER_FOLLOW = 'CREATE_USER_FOLLOW';
export const DELETE_USER_FOLLOW = 'DELETE_USER_FOLLOW';

export const requestUser = (id) => ({
  type: REQUEST_USER,
  id
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const createUserFollow = (followerId, followeeId) => ({
  type: CREATE_USER_FOLLOW,
  followerId,
  followeeId
});

export const deleteUserFollow = (followerId, followeeId) => ({
  type: DELETE_USER_FOLLOW,
  followerId,
  followeeId
});
