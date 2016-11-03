# Moodify

Heroku: https://moodify-app.herokuapp.com/

## Minimum Viable Product

Moodify is an audio-streaming web application inspired by Spotify: built with a React/Redux front-end and powered by a Rails backend.  By the end of Week 9, this app will, at a minimum, support the following functionality with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Playlist creation, deletion, and updating
- [ ] Following playlists
- [ ] Continuous audio streaming while navigating the site
- [ ] Following other users
- [ ] Production README

Some bonus features that Moodify may also include:

- [ ] Searching for users, playlists and songs all in one place
- [ ] Radio option for random music streaming
- [ ] Play Queue
- [ ] Radio option looks at the music you like and serves you music based on your likes
- [ ] Music being filtered by Genres
- [ ] Search suggestions using elastic search to cheapen the cost of making database queries
- [ ] Option to see what people you follow are listening to
- [ ] Option to see what are the most popular songs on the website
- [ ] Mobile responsive

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-heirarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [x] New Rails project
- [x] `User` model/migration
- [x] Back end authentication (session/password)
- [x] `StaticPages` controller and root view
- [x] Webpack & react/redux modules
- [x] `APIUtil` to interact with the API
- [x] Redux cycle for front-end authentication
- [x] User signup/sign in components
- [x] UserDetail component for currentUser on account tab
- [x] Display component for listing out features
- [ ] Display component for rotating screenshots
- [x] Style signup/sign in components
- [x] Seed users
- [x] Fill out display components
- [x] Review phase 1

### Phase 2: Songs Model, API, and components (2 days)

**Objective:** Songs can be played

- [ ] `Song` model
- [ ] Audio file hosting (AWS?)(Cloudinary?)
- [ ] Image file hosting (AWS?)(Cloudinary?)
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for songs (`SongsController`)
- [ ] JBuilder views for songs
- [ ] Song components and respective Redux loops
- [ ] Style songs components
- [ ] Seed songs

### Phase 3: Playlists and playlist follows (2 day)

**Objective:** Playlists can be created, destroyed, followed, and unfollowed. Songs can be added to and removed from playlists.

- [ ] `Playlist` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for playlists (`PlaylistsController`)
- [ ] JBuilder views for playlists
- [ ] Fetching playlists for the current user
- [ ] Adding and removing songs from playlists
- [ ] Playlist components and respective Redux loops
- [ ] Style playlist components
- [ ] Seed playlists
- [ ] `PlaylistFollow` model
- [ ] Seed database with a small amount of test data
- [ ] Create destroy API for playlists (`PlaylistsController`)
- [ ] Add buttons for following / unfollowing playlists

### Phase 4: Streaming audio (2 days)

**Objective:** Audio can be streamed Continuously while navigating the site
- [ ] Research streaming Audio
- [ ] Current song Redux cycles and reducer
- [ ] Current song components
  - [ ] `PlayBar`
  - [ ] `CurrentSongDisplay`
  - [ ] `CurrentSongControlsContainer`
  - [ ] `CurrentSongProgressBar`
- [ ] Styling for audio components

### Phase 5: Follow Users / updating current user (1 day)

**Objective:** Users can browse and follow other users.

- [ ]`UserFollow` model
- [ ] Create destroy API for follows (`UsersController`)
- [ ] Related components
- [ ] Styling for components
