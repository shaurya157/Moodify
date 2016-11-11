import {search} from '../util/search_api_util';
import {REQUEST_SEARCH,
        receiveSearch} from '../actions/search_actions';

const SearchMiddleware = ({dispatch}) => next => action => {
  let searchSuccess = (data) => dispatch(receiveSearch(data));

  switch (action.type) {
    case REQUEST_SEARCH:
      search(action.query, searchSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default SearchMiddleware;
