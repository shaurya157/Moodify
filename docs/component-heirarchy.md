# Component Heirarchy

## Splash Page ##

**LoginDisplayContainer**
  + FeatureIndex
  + ScreenshotIndex

**AuthFormContainer**
 - SignupForm
 - SigninForm

## App level ##

**HomePageContainer**
 - SidebarContainer
    + SidebarIndexItem

 - BrowseContainer
    + SongIndexContainer
      + SongIndexItem
    + PlaylistsIndexContainer
      PlaylistsIndexItem
        + PlayListSongs
          + SongTools
          + AddPlaylistContainer
          + FollowButton

##Search##

**SearchContainer**
 - FormInputContainer
 - SearchResultContainer
    + SongSearch
    + PlaylistSearch
    + ProfileSearch

##Playlist##

**PlaylistContainer**
 - FollowedPlaylistContainer
    + PlaylistIndexItem
      + PlayButton
      + SongTools (remove song, play song)
    + PlayPlaylistButton
    + RemovePlaylistButton
 - NewPlaylistContainer
 - FollowedPeopleContainer

##Follow

 - FollowPeopleContainer
    + FollowPeopleIndex
      + FollowButton
      + FollowPeopleIndexItem (Link to UserContainer?)

(Might need to add a search bar to search for people to follow)

##Liked Songs (Quick add to one playlist)##

 - LikedSongsContainer
    + PlayButtonContainer
    + SongToolsContainer

##Account / View User

**UserContainer**
 - FollowedPlaylistContainer
 - UserProfileContainer
    + FollowButton

##Playing Tracks

**PlayBarContainer**
 - PlayBar
   + CurrentTrackDisplay
   + CurrentTrackControlsContainer
   + CurrentTrackProgressBarContainer

**CurrentTrackControlsContainer**
 - PlayButton
 - ForwardButton
 - BackButton

**CurrentTrackProgressBarContainer**
  - CurrentTrackProgressBar

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "SplashPage" |
| "/browse/songs" | "SongsIndexContainer" |
| "/browse/playlists" | "PlaylistsIndexContainer" |
| "/follow/" | "FollowPeopleContainer" |
| "/users/:user_id" | "UserContainer" |
| "/playlist" | "PlaylistContainer" |
| "/users/:user_id" | "UserContainer" |
