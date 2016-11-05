import { connect } from 'react-redux';
import {deleteSongFromQueue,
        playSong} from '../../actions/audio_actions';
import PlayQueue from './playqueue';


const mapStateToProps = ({currentSong}) => ({
  playqueue: currentSong.playqueue,
  playedSongs: currentSong.playedSongs
});

const mapDispatchToProps = (dispatch) => ({
  deleteSongFromQueue: (id) => dispatch(deleteSongFromQueue(id)),
  playSong: (song) => dispatch(playSong(song)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayQueue);
