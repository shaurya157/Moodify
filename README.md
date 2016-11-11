# Moodify

[Moodify live][prodlink]

Moodify is a full-stack web application that lets users play songs, create, play and share their favorite playlists. Inspired by Spotify, it is built on a Rails backend with a PostgreSQL database, and it uses React.js with a Redux architectural framework on the frontend.  

![Moodify home page: https://moodify-app.herokuapp.com/#/][home]

## Features & Implementation

###Continuous audio streaming

Users can Continuously stream audio while navigating around the site. This is largely due to Moodify's frontend architecture; it is a single-page web app that dynamically renders React components. The audio player, as well as the sound itself, are simply React components that persist as users move throughout the site.

Audio playback is controlled on the frontend via an `Player` React component, which allows for standard audio control options, like playing and pausing, going backward and forward, and changing song position via a progress bar. Users can also play or pause a song by clicking a play button in the `songIndexItem`.

The currently playing song, the play status (playing, paused, etc), and upcoming / recently played songs are stored in the Redux store.

![Moodify songs page: https://moodify-app.herokuapp.com/#/app][songs audio]

###Song playback

On the backend, songs are stored in a single table that records each song's `id`, `artist`, `title`, `song_image_url`, `audio_url`. The songs are indexed on user_id and category so different sets of songs can be quickly fetched via API calls based on where a user is in the app.

Songs are rendered in `songIndexItem` and `PlaylistSongsIndexItem` containers.

###Playlist creation and editing

Users can organize songs into playlists. Playlists are stored in a playlist table that songs a playlist's `id`, `title`, and `description`. Playlists are associated with songs via a Playlistsongs join table that songs a `playlist_id` and a `song_id`. The join table is indexed on `playlist_id` to make it fast to fetch all of the songs for a playlist.

On the frontend, users can see Playlists in a `PlaylistIndexItem`, which shows a playlist's name and user and the Playlist's songs. Clicking on a `PlaylistIndexItemContainer` opens a modal with all the songs in the playlist, from which the user can play the playlist, follow it and create their own playlist, adding sonds from the playlist.

![Moodify songs page: http://www.Moodify.stream/#/app/][playlist detail]

###Following users and playlists

Users can follow and unfollow other users and playlists. This can be done by viewing a playlist created by the user or by searching for them in the search bar, navigating to their profile and clicking on the follow button.

On the backend, these follows are handled by UserFollows and PlaylistFollows join tables, which song `follower_id` and `followee_id`, and `user_id` and `playlist_id`, respectively. The tables are indexed on `follower_id` and `user_id` to make it quick to fetch the users and playlists the currently signed in user follows.

Custom API calls are made when users click 'follow' and 'unfollow' links on the frontend that create and destroy these follow associations.

![Moodify songs page: http://www.Moodify.stream/#/app/][user follows]

###Search

Users can search for songs and playlists by using the search bar in the header. Calls to a custom search API are made dynamically as a user types in a search query. The API finds and returns songs and playlists and users with the `title`/`artist`/`username` that match the user's search query.

![Moodify songs page: http://www.Moodify.stream/][search]

###User Experience

One of the primary goals of this project was to create a smooth, desktop-app like user experience in the browser. This was largely accomplished via the React/Redux architectural pattern, which made full page refreshes completely unnecessary.

Some user testing was also completed to fine-tune application layout and interactions.

##Future directions

Moodify was designed and built in under 2 weeks, and as such there's still a lot of room for expansion. Future steps for the project are outlined below.


###Playlist reordering

I'd like users to be able to reorder playlists by dragging and dropping `PlaylistsongsIndexItem` components in the `PlaylistsongsIndex`.

###Song and playlist tagging

I'd like to add Song genres into the mix by adding the relevant column in my database and allowing users to filter by genre. In addition to this, I also want to add functionality to allow users to upload their custom pictures for playlists.

###Radio

Spotify implements a song radio that looks at a particular song's genre and serves you songs based on the same genre. This would be accomplished on my side by first implementing genres within songs.

###Location and time-based song exploration

Eventually, I'd like to draw on the Google maps API to allow users to browse songs by location and time period. Adding this functionality could expand Moodify's potential as an entertainment centre &mdash; e.g. a user can potentially look at musics around their geographic location, as well as filter music by timeline of creation.

This would of course require storing additional information, like song location and song date in the songs table.

###Looking at the music your friends are playing

The Spotify desktop app allows one to look at what their friends are listening to. This is a component on their home page that gets automatically updated when someone starts listening to a song.

[prodlink]: https://moodify-app.herokuapp.com/#/
[home page]: ./docs/images/home.png "Moodify home page"
[songs audio]: ./docs/images/songs.png "Speehify audio player"
[playlist detail]: ./docs/images/playlist.png "Playlist detail page"
[user follows]: ./docs/images/user.png "User page"
[search]: ./docs/images/search.png "Search page"
