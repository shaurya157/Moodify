class Playlist < ActiveRecord::Base
  validates :title, :description, :user_id, :playlist_image_url, presence: true

  belongs_to :user
  has_many :playlist_follows

  has_many :followers, through: :playlist_follows, source: :user

  has_many :playlist_songs, dependent: :destroy
  has_many :songs, through: :playlist_songs, source: :song
end
