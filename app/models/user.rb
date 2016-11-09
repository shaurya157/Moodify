class User < ActiveRecord::Base
  validates :username, :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :username, uniqueness: true

  after_initialize :ensure_session_token, :ensure_profile_picture
  attr_reader :password

  has_many :playlists, inverse_of: :user
  has_many :playlist_follows
  has_many :followed_playlists, through: :playlist_follows, source: :playlist

  has_many :user_follows,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :UserFollow

  has_many :followees, through: :user_follows, source: :followee

  has_many :user_followed_bys,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: :UserFollow

  has_many :followers, through: :user_follows, source: :follower

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def ensure_profile_picture
    self.profile_image_url ||= 'https://res.cloudinary.com/djv7nouxz/image/upload/q_50/v1478546800/FullSizeRender_f0dshm.jpg'
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end
end
