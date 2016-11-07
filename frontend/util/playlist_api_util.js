export const fetchPlaylists = (success) => {
  $.ajax({
  method: 'GET',
  url: 'api/playlists',
  success
  });
};
