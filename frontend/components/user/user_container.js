import {connect} from 'react-redux';
import User from './user';
import {createUserFollow, deleteUserFollow, logout} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.users.user
});

const mapDispatchToProps = (dispatch) => ({
  createUserFollow: (followerId, followeeId) => dispatch(createUserFollow(followerId, followeeId)),
  deleteUserFollow: (followerId, followeeId) => dispatch(deleteUserFollow(followerId, followeeId)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
