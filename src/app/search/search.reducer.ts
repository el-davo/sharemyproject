import {SearchState, searchState} from './search.state';
import {SearchActions} from './search.actions';

export const searchReducer = (state: SearchState = searchState, action): SearchState => {
  switch (action.type) {
    case SearchActions.SEARCH:
      return {...state, isSearching: true};
    case SearchActions.SEARCH_SUCCESS:
      return {...state, isSearching: false, results: action.results};
    case SearchActions.SEARCH_FAIL:
      return {...state, isSearching: false};
    default:
      return state;
  }
};
