export const search = (params, success) => {
  $.ajax({
    method: "GET",
    url: 'api/search',
    data: {search: {query: params}},
    success
  });
};
