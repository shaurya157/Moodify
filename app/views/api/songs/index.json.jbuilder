json.array! @songs do |song|
  json.extract! song, :id, :title, :album, :song_image_url, :audio_url, :artist
end
