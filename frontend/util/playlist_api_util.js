export const fetchPlaylists = (success) => {
  $.ajax({
  method: 'GET',
  url: 'api/playlists',
  success
  });
};

export const fetchPlaylist = (id, success) => {
  $.ajax({
  method: 'GET',
  url: `api/playlists/${id}`,
  success
  });
};

export const createPlaylistFollow = (userId, playlistId, success) => {
  $.ajax({
  method: 'POST',
  url: `api/playlistfollows`,
  data: {user_id: userId, playlist_id: playlistId}
  });
};

export const fetchUserFollowedPlaylists = (userId, success) => {
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}`,
    data: {userId: userId, need_playlist: true},
    success
  });
};
