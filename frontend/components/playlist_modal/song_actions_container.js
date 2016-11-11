import {connect} from 'react-redux';
import SongActions from './song_actions';
import {addSongToPlaylist, createPlaylist} from '../../actions/playlist_actions';
import {addSongToQueue} from '../../actions/audio_actions';

const mapStateToProps = state => ({
  followedPlaylists: state.playlists.followedPlaylists,
  createdPlaylists: state.playlists.createdPlaylists,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
  addSongToQueue: (song) => dispatch(addSongToQueue(song)),
  createPlaylist: (playlist,songId) => dispatch(createPlaylist(playlist, songId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongActions);
