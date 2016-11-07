json.array! @playlists do |playlist|
  json.extract! playlist, :id, :title, :playlist_image_url
end
