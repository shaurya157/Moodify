export const fetchSongs = (success) => {
  $.ajax({
  method: 'GET',
  url: 'api/songs',
  success
  });
};
