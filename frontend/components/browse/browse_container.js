import {connect} from 'react-redux';
import Browse from './browse';
import {requestAllSongs} from '../../actions/song_actions';
import {requestAllPlaylists} from '../../actions/playlist_actions';

const mapStateToProps = ({songs}) => ({
  songs
});

const mapDispatchToProps = (dispatch) => ({
  requestAllSongs: () => dispatch(requestAllSongs()),
  requestAllPlaylists: () => dispatch(requestAllPlaylists())
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
