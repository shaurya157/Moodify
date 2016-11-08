import {connect} from 'react-redux';
import Playlist from './playlist';
import {playPlaylist} from '../../actions/audio_actions';
import {requestPlaylist, clearPlaylist} from '../../actions/playlist_actions';

const mapStateToProps = (state) => ({
  playlist: state.playlists.currPlaylist,
  playing: document.getElementsByClassName('player-not-playing').length === 0
});

const mapDispatchToProps = (dispatch) => ({
  playPlaylist: (playlist) => dispatch(playPlaylist(playlist)),
  requestPlaylist: (id) => dispatch(requestPlaylist(id)),
  clearPlaylist: () => dispatch(clearPlaylist())
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
