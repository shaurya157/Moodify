import {connect} from 'react-redux';
import User from './user';
import {createUserFollow, deleteUserFollow} from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.users.user
});

const mapDispatchToProps = (dispatch) => ({
  createUserFollow: (followerId, followeeId) => dispatch(createUserFollow(followerId, followeeId)),
  deleteUserFollow: (followerId, followeeId) => dispatch(deleteUserFollow(followerId, followeeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
