import {connect} from 'react-redux';
import Splash from './splash';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

export default connect(mapStateToProps)(Splash);
