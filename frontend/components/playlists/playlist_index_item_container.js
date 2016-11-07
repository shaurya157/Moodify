import {connect} from 'react-redux';
import PlaylistIndexItem from './playlist_index_item';

const mapStateToProps = (state, ownProps) => ({
  playlist: ownProps.playlist
});

const mapDispatchToProps = (state) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndexItem);
