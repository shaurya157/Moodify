class Playlist < ActiveRecord::Base
  validates :title, :description, :user_id, :playlist_image_url, presence: true

  PLAYLIST_IMAGES = [
    'http://res.cloudinary.com/djv7nouxz/image/upload/v1478813928/uvRBqDAfQfaGPJiI6lVS_R0001899_htjkip.jpg',
    'http://res.cloudinary.com/djv7nouxz/image/upload/v1478813925/photo-1477457724415-363b61bc0ddf_abddtu.jpg',
    'http://res.cloudinary.com/djv7nouxz/image/upload/v1478813933/photo-1474871256005-cbf50b902421_el2jdt.jpg',
    'http://res.cloudinary.com/djv7nouxz/image/upload/v1478813844/photo-1475568002931-69635cbf7b2d_x2jyd3.jpg',
    'http://res.cloudinary.com/djv7nouxz/image/upload/v1478813849/uvRBqDAfQfaGPJiI6lVS_R0001899_vkykc3.jpg',
    'http://res.cloudinary.com/djv7nouxz/image/upload/v1478813842/photo-1470406385593-bb0110c681a9_q7kwzf.jpg',
    'http://res.cloudinary.com/djv7nouxz/image/upload/v1478813834/photo-1464468164664-850fcaf6be4a_nxjmhy.jpg',
    'http://res.cloudinary.com/djv7nouxz/image/upload/v1478813829/photo-1421941629638-ded5fddb2300_dq84tx.jpg',
    'http://res.cloudinary.com/djv7nouxz/image/upload/v1478813832/photo-1475139475866-6fef2ef89731_okgqqm.jpg'
  ]

  after_initialize :ensure_playlist_image

  belongs_to :user
  has_many :playlist_follows

  has_many :followers, through: :playlist_follows, source: :user

  has_many :playlist_songs, dependent: :destroy
  has_many :songs, through: :playlist_songs, source: :song

  def ensure_playlist_image
    self.playlist_image_url ||= PLAYLIST_IMAGES[rand(10)]
  end
end
