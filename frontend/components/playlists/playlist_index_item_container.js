import {connect} from 'react-redux';
import PlaylistIndexItem from './playlist_index_item';


const mapStateToProps = (state, ownProps) => ({
  playlist: ownProps.playlist
});



export default connect(mapStateToProps)(PlaylistIndexItem);
