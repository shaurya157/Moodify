# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users`
   - accepts `user_id` as optional query param get only users that the current user follows
- `POST /api/users`
- `PATCH /api/users`
- `GET /api/user/:id`
- `POST /api/users/:id/follow`: add a follow from the current user to the user with :user_id
- `POST /api/users/:id/unfollow`: remove a follow from the current user to the user with :user_id

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Songs

- `GET /api/songs`

### Playlists

- `GET /api/playlists`
  - accepts `user_id` query param to get playlists that belong to user_id
  - takes an optional `with_songs` param to get playlists with song information (for current user playlists)
- `POST /api/playlists`
- `GET /api/playlists/:id`
- `DELETE /api/playlists/:id`
- `POST /api/playlist/:id/follow`: create a follow from the current user to the specified playlist
- `POST /api/playlist/:id/unfollow`: remove a follow from the current user to the specified playlist
- `POST /api/playlist/:id/add_song`: add a song to the given playlist
  - Takes in a song_id param to specify the song to add
- `POST /api/playlist/:id/remove_song`: remove a song from a playlist
  - Takes in a song_id param to specify the song to remove
