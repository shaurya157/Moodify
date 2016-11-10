import {connect} from 'react-redux';
import Playlist from './playlist';
import {playPlaylist,
        playSong,
        addSongToQueue} from '../../actions/audio_actions';
import {requestPlaylist,
        clearPlaylist,
        createPlaylistFollow,
        deletePlaylistFollow,
        addSongToPlaylist} from '../../actions/playlist_actions';

const mapStateToProps = (state) => ({
  playlist: state.playlists.currPlaylist,
  playing: state.currentSong.playing,
  currentUser: state.session.currentUser,
  followedPlaylists: state.playlists.followedPlaylists
});

const mapDispatchToProps = (dispatch) => ({
  playPlaylist: (playlist) => dispatch(playPlaylist(playlist)),
  requestPlaylist: (id) => dispatch(requestPlaylist(id)),
  clearPlaylist: () => dispatch(clearPlaylist()),
  createPlaylistFollow: (userId, playlistId) => dispatch(createPlaylistFollow(userId, playlistId)),
  deletePlaylistFollow: (userId, playlistId) => dispatch(deletePlaylistFollow(userId, playlistId)),
  playSong: (song) => dispatch(playSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
