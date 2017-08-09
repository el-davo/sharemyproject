import {SearchState, searchState} from './search.state';
import {SearchActions} from './search.actions';

export const searchReducer = (state: SearchState = searchState, action): SearchState => {
  switch (action.type) {
    case SearchActions.SHOW_SEARCH_OVERLAY:
      return {...state, showSearchOverlay: true};
    case SearchActions.HIDE_SEARCH_OVERLAY:
      return {...state, showSearchOverlay: false, results: {lists: []}};
    case SearchActions.SEARCH:
      return {...state, isSearching: true};
    case SearchActions.SEARCH_SUCCESS_LISTS:
      return {...state, isSearching: false, results: {...state.results, lists: action.lists}};
    case SearchActions.SEARCH_FAIL:
      return {...state, isSearching: false};
    case SearchActions.FETCH_SELECTED_SEARCH_LIST:
      return {...state, isFetchingSelectedSearchList: true, selectedSearchList: []};
    case SearchActions.FETCH_SELECTED_SEARCH_LIST_SUCCESS:
      return {...state, isFetchingSelectedSearchList: false, selectedSearchList: action.links};
    case SearchActions.FETCH_SELECTED_SEARCH_LIST_FAIL:
      return {...state, isFetchingSelectedSearchList: false};
    default:
      return state;
  }
};
