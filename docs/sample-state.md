```json
{
  currentUser: {
    id: 1,
    username: "shaurya157",
    bio: "current user description",
    profileImageUrl: "path/to/prof/image"
  },
  forms: {
    signUp: {errors: []},
    signIn: {errors: []},
    playlist: {},
  },
  //information about the currently playing track
  currentTrack: {
    track:  {
      id: 3
      title: "Redux",
      userId: 3,
      description: "description",
      coverUrl: "http://path/to/cover",
      audioUrl: "http://path/to/audio",
    }
    trackQueue: [track1, track2, track3],
    previousTracks: [track4, track5],
    playing: true
  },
  playlists: {
    //the current user's followed playlists, fetched on sign-in to display in 'Playlist'
    followedPlaylists: {
      1:  {
        id: 1
        title: "Redux",
        userId: 3,
        description: "description",
        follows: true,
        coverUrl: "http:/path/to/cover",
      }
    },
    //vieweing a playlist details page (include all tracks)
    playlistDetail: {
      id: 1,
      title: "Redux",
      description: "lorem ipsum description",
      follows: true,
      userId: 4,
      tracks: [
         1:  {
            id: 1,
            title: "Redux",
            user_id: 3,
            description: "description",
            coverUrl: "http://path/to/cover",
            audioUrl: "http://path/to/audio",
          }
      ]
    },
  },
  users {
    //user index, fetched when viewing followed users or users to follow
    allUsers: {
      3: {
          id: 3,
          username: "username",
          bio: "bio",
          userId: 3,
          follows: true
          profileImageUrl: "http:/path/to/cover"
        }
    },
    //viewing a single user page (includes index of that user's playlists)
    userDetail: {
      user:  {
          id: 3
          username: "username",
          bio: "bio",
          user_id: 3,
          follows: true
          profileImageUrl: "http:/path/to/cover"
      },
      playlists: {
        1: {
            id: 1
            title: "Redux",
            userId: 3,
            follows: false
            description: "description",
            coverUrl: "http:/path/to/cover"
        }
      }
    }
  }
}
