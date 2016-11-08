import {connect} from 'react-redux';
import PlaylistIndex from './playlist_index';
import {requestFollowedPlaylists} from '../../actions/playlist_actions';

const mapStateToProps = (state) => ({
  playlists: state.playlists.allPlaylists,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestFollowedPlaylists: (id) => dispatch(requestFollowedPlaylists(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
