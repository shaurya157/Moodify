class Song < ActiveRecord::Base
  validates :title, :artist, :album, :song_image_url, :audio_url, presence: true
end
