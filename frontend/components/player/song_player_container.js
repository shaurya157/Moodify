import { connect } from 'react-redux';
import {deleteSongFromQueue,
        playSong,
        pauseSong,
        goForward,
        goBack} from '../../actions/audio_actions';
import SongPlayer from './player';


const mapStateToProps = ({currentSong}) => ({
  song: currentSong.song,
  playing: currentSong.playing,
  playqueue: currentSong.playqueue,
  playedSongs: currentSong.playedSongs
});

const mapDispatchToProps = (dispatch) => ({
  deleteSongFromQueue: (id) => dispatch(deleteSongFromQueue(id)),
  playSong: (song) => dispatch(playSong(song)),
  pauseSong: () => dispatch(pauseSong()),
  goForward: () => dispatch(goForward()),
  goBack: () => dispatch(goBack())
});

export default connect(mapStateToProps, mapDispatchToProps)(SongPlayer);
