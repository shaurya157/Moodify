export const fetchUser = (id, success) => {
  $.ajax({
  method: 'GET',
  url: `api/users/${id}`,
  success
  });
};

export const createUserFollow = (followerId, followeeId) => {
  $.ajax({
  method: 'POST',
  url: `api/users/${followeeId}/follow`,
  data: {follower_id: followerId}
  });
};

export const deleteUserFollow = (followerId, followeeId) => {
  $.ajax({
  method: 'DELETE',
  url: `api/users/${followeeId}/unfollow`,
  data: {follower_id: followerId}
  });
};
