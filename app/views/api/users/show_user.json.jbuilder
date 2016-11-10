json.extract! @user, :username, :id, :bio, :profile_image_url, :followers
json.followedPlaylists @user.followed_playlists
json.createdPlaylists @user.playlists
