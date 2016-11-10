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

export const fetchUserPlaylists = (userId, success) => {
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}`,
    data: {userId: userId, need_playlist: true},
    success
  });
};

export const createPlaylistFollow = (userId, playlistId) => {
  $.ajax({
  method: 'POST',
  url: `api/playlists/${playlistId}/follow`,
  data: {user_id: userId}
  });
};

export const deletePlaylistFollow = (userId, playlistId) => {
  $.ajax({
  method: 'DELETE',
  url: `api/playlists/${playlistId}/unfollow`,
  data: {user_id: userId}
  });
};

export const addSongToPlaylist = (songId, playlistId) => {
  $.ajax({
  method: 'POST',
  url: `api/playlists/${playlistId}/add_song`,
  data: {song_id: songId}
  });
};

export const deleteSongFromPlaylist = (songId, playlistId) => {
  $.ajax({
  method: 'DELETE',
  url: `api/playlists/${playlistId}/remove_song`,
  data: {song_id: songId}
  });
};
