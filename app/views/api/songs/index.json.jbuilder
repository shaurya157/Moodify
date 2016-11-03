json.array! do
  @songs.each do |song|
    json.extract! song, :id, :title, :album, :song_image_url, :audio_url
  end
end
