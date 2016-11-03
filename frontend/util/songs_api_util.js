export const songs = (success, error) => {
  $.ajax({
  method: 'GET',
  url: 'api/songs',
  success,
  error
  });
};
