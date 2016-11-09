import {connect} from 'react-redux';
import SongActions from './song_actions';
import {addSongToPlaylist} from '../../actions/playlist_actions';
import {playSong, addSongToQueue} from '../../actions/audio_actions';

const mapStateToProps = ({playlists}, ownProps) => ({
  followed_playlists: playlists.followed_playlists,
  song: ownProps.song
});

const mapDispatchToProps = dispatch => ({
  addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
  playSong: (song) => dispatch(playSong(song)),
  addSongToQueue: (song) => dispatch(addSongToQueue(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongActions);
