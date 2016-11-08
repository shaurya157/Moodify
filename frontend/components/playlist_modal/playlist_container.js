import {connect} from 'react-redux';
import Playlist from './playlist';
import {playPlaylist} from '../../actions/audio_actions';
import {requestPlaylist, clearPlaylist, createPlaylistFollow} from '../../actions/playlist_actions';

const mapStateToProps = (state) => ({
  playlist: state.playlists.currPlaylist,
  playing: document.getElementsByClassName('player-not-playing').length === 0,
  currentUser: state.session.currentUser,
  followedPlaylists: state.playlists.followedPlaylists
});

const mapDispatchToProps = (dispatch) => ({
  playPlaylist: (playlist) => dispatch(playPlaylist(playlist)),
  requestPlaylist: (id) => dispatch(requestPlaylist(id)),
  clearPlaylist: () => dispatch(clearPlaylist()),
  createPlaylistFollow: (userId, playlistId) => dispatch(createPlaylistFollow(userId, playlistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
