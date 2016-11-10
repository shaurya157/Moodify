import {connect} from 'react-redux';
import PlaylistIndex from './playlist_index';
import {requestUserPlaylists} from '../../actions/playlist_actions';

const mapStateToProps = (state) => ({
  playlists: state.playlists.allPlaylists,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestUserPlaylists: (id) => dispatch(requestUserPlaylists(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
