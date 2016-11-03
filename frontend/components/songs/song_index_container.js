import {connect} from 'react-redux';
import SongIndex from './song_index';

const mapStateToProps = (state, ownProps) => ({
  songs: ownProps.songs
});

export default connect(mapStateToProps)(SongIndex);
