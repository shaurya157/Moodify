import {connect} from 'react-redux';
import SongActions from './song_actions';
import {addSongToPlaylist} from '../../actions/playlist_actions';
import {addSongToQueue} from '../../actions/audio_actions';

const mapStateToProps = state => ({
  followedPlaylists: state.playlists.followedPlaylists
});

const mapDispatchToProps = dispatch => ({
  addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
  addSongToQueue: (song) => dispatch(addSongToQueue(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongActions);
