# Component Heirarchy

## Login/Signup Page ##

**LoginDisplayContainer**
  + FeatureIndex
  + ScreenshotIndex

**AuthFormContainer**
 - SignupForm
 - SigninForm

## App level ##

**Home Page**
 - SidebarContainer
    + SidebarIndex

 - BrowseContainer
    + SongRecommendationContainer
    + PlaylistRecommendationContainer
      + PlayListSongs

##Player##
 -
##Browse##


##Search##

##Playlist

##Follow

##Your Tracks

##Account / View User

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
| "/browse/tracks" | "TracksIndex" |
| "/browse/playlists" | "PlaylistsIndex" |
| "/follow/friends" | "UserIndex" |
| "/follow/find-friends" | "UserIndex" |
| "/users/:user_id" | "UserDetailContainer" |
| "/users/:user_id/edit" | "UserDetailsFormContainer" |
| "/your-tracks" | "TracksIndex" |
| "/your-tracks/new" | "TrackFormContainer" |
| "/playlist/:playlist_id" | "PlaylistDetailContainer" |
| "/playlist/:playlist_id/edit" | "PlaylistFormContainer" |
| "/playlist/new" | "NewPlaylistFormContainer" |
