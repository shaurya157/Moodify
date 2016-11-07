import {connect} from 'react-redux';
import PlaylistIndexItem from './playlist_index_item';
import {requestPlaylist} from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => ({
  playlist: ownProps.playlist
});

const mapDispatchToProps = (dispatch) => ({
  requestPlaylist: (id) => dispatch(requestPlaylist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndexItem);
