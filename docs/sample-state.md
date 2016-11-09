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
  //information about the currently playing song
  currentsong: {
    song:  {
      id: 3
      title: "Redux",
      userId: 3,
      description: "description",
      album: "Lorem",
      coverUrl: "https://path/to/cover",
      audioUrl: "https://path/to/audio",
      duration: "4:04"
    }
    songQueue: [song1, song2, song3],
    previoussongs: [song4, song5],
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
        coverUrl: "https:/path/to/cover",
      }
    },

    //vieweing a playlist details page (include all songs)
    playlistDetail: {
      id: 1,
      title: "Redux",
      description: "lorem ipsum description",
      follows: true,
      userId: 4,
      songs: [
         1:  {
            id: 1,
            title: "Redux",
            description: "description",
            coverUrl: "https://path/to/cover",
            audioUrl: "https://path/to/audio",
            duration: "4:40",
            album: "Lorem"
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
          follows: true
          profileImageUrl: "https:/path/to/cover"
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
          profileImageUrl: "https:/path/to/cover"
      },
      playlists: {
        1: {
            id: 1
            title: "Redux",
            userId: 3,
            follows: false
            description: "description",
            coverUrl: "https:/path/to/cover"
        }
      }
    }
  }
}
