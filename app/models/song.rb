class Song < ActiveRecord::Base
  validates :title, :artist, :album, :song_image_url, :audio_url, presence: true

  has_many :playlist_songs
  has_many :playlists, through: :playlist_songs, source: :playlist
end
