import {connect} from 'react-redux';
import Playlist from './playlist';
import {playPlaylist} from '../../actions/audio_actions';

const mapStateToProps = ({playlists}) => ({
  playlist: playlists.currPlaylist
});

const mapDispatchToProps = (dispatch) => ({
  playPlaylist: (playlist) => dispatch(playPlaylist(playlist))
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
