import {connect} from 'react-redux';
import SongIndex from './song_index';
import {playSong, addSongToQueue, pauseSong} from '../../actions/audio_actions';

const mapStateToProps = (state, ownProps) => ({
  songs: ownProps.songs,
  location: ownProps.location,
});

// This has a location to differ it from browse vs. playlist, making it easier
// to dry up code. I.E. you can now use this song index container anywhere.
export default connect(mapStateToProps)(SongIndex);
