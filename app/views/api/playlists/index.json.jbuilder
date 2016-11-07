json.array! @playlists do |playlist|
  json.extract! playlist, :id, :title, :description, :user_id, :playlist_image_url
end
