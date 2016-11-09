import {connect} from 'react-redux';
import User from './user';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.users.user
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(User);
