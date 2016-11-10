import {connect} from 'react-redux';
import SongActions from './song_actions';
import {addSongToPlaylist} from '../../actions/playlist_actions';
import {addSongToQueue} from '../../actions/audio_actions';

const mapStateToProps = state => ({
  followedPlaylists: state.playlists.followedPlaylists,
  createdPlaylists: state.playlists.createdPlaylists
});

const mapDispatchToProps = dispatch => ({
  addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
  addSongToQueue: (song) => dispatch(addSongToQueue(song)),
  addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongActions);
