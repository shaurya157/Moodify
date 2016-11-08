import {connect} from 'react-redux';
import User from './user';
import {requestUser} from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.users.user
});

const mapDispatchToProps = (dispatch) => ({
  requestUser: (id) => dispatch(requestUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
