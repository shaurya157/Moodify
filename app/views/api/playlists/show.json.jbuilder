json.extract! @playlist, :id, :title, :playlist_image_url, :songs, :user_id
json.username @playlist.user.username
