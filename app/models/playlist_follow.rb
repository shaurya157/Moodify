class PlaylistFollow < ActiveRecord::Base
  validates :user_id, :playlist_id, presence: true
  validates :user_id, uniqueness: {scope: :playlist_id}

  belongs_to :user
  belongs_to :playlist
end
