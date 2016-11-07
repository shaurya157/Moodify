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
