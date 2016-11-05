import { connect } from 'react-redux';
import {  } from '../../actions/session_actions';
import Player from './player';


const mapStateToProps = ({currentSong}) => ({
  song: currentSong.song,
  playing: currentSong.playing
});

export default connect(mapStateToProps)(Player);
