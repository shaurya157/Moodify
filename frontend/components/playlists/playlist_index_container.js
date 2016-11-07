import {connect} from 'react-redux';
import PlaylistIndex from './playlist_index';

const mapStateToProps = (state) => ({
  playlists: state.playlists.allPlaylists
});

export default connect(mapStateToProps)(PlaylistIndex);
