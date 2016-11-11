import { connect } from 'react-redux';
import Sidebar from './sidebar';
import {clearSearch} from '../../actions/search_actions';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  clearSearch: () => dispatch(clearSearch())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

// Putting this on hold to configure reducers first
