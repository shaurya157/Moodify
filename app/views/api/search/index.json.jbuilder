json.songs do
  json.array! @songs do |song|
    json.extract! song, :title, :artist, :album, :song_image_url, :audio_url, :id
  end
end

json.playlists do
  json.array! @playlists do |playlist|
    json.extract! playlist, :title, :id, :playlist_image_url
  end
end

json.users do
  json.array! @users do |user|
    json.extract! user, :username, :profile_image_url, :id
  end
end
