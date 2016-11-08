json.extract! @playlist, :id, :title, :description, :playlist_image_url, :songs
json.username @playlist.user.username
