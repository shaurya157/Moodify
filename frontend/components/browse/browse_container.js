import {connect} from 'react-redux';
import Browse from './browse';
import {requestAllSongs} from '../../actions/song_actions';

const mapStateToProps = ({songs}) => ({
  songs
});

const mapDispatchToProps = (dispatch) => ({
  requestAllSongs: () => dispatch(requestAllSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
