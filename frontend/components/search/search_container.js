import {connect} from 'react-redux';
import {requestSearch} from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = ({search}) => ({
  search
});

const mapDispatchToProps = (dispatch) => ({
  requestSearch: (query) => dispatch(requestSearch(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
