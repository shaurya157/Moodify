import { connect } from 'react-redux';
import Sidebar from './sidebar';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

// Putting this on hold to configure reducers first
