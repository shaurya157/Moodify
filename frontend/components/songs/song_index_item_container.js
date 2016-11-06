import {connect} from 'react-redux';
import SongIndexItem from './song_index_item';
import {playSong, addSongToQueue, pauseSong} from '../../actions/audio_actions';

const mapStateToProps = (state, ownProps) => ({
  currentSong: state.currentSong.song,
  playing: state.currentSong.playing,
  song: ownProps.song
});

const mapDispatchToProps = (dispatch) => ({
  playSong: (song) => dispatch(playSong(song)),
  addSongToQueue: (song) => dispatch(addSongToQueue(song)),
  pauseSong: () => dispatch(pauseSong())
});

// This has a location to differ it from browse vs. playlist, making it easier
// to dry up code. I.E. you can now use this song index container anywhere.
export default connect(mapStateToProps, mapDispatchToProps)(SongIndexItem);
