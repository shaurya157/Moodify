json.extract! @playlist, :id, :title, :description, :playlist_image_url, :songs, :user_id
json.username @playlist.user.username
