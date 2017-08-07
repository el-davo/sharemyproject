import {Injectable} from '@angular/core';
import {List} from '../lists/list.state';

@Injectable()
export class SearchActions {

  static SHOW_SEARCH_OVERLAY = 'search/SHOW_SEARCH_OVERLAY';
  static HIDE_SEARCH_OVERLAY = 'search/HIDE_SEARCH_OVERLAY';

  static SEARCH = 'search/SEARCH';
  static SEARCH_SUCCESS = 'search/SEARCH_SUCCESS';
  static SEARCH_FAIL = 'search/SEARCH_FAIL';

  showSearchOverlay() {
    return {type: SearchActions.SHOW_SEARCH_OVERLAY};
  }

  hideSearchOverlay() {
    return {type: SearchActions.HIDE_SEARCH_OVERLAY};
  }

  search(term: string) {
    return {type: SearchActions.SEARCH, term};
  }

  searchSuccess(results: List[]) {
    return {type: SearchActions.SEARCH_SUCCESS, results};
  }

  searchFail() {
    return {type: SearchActions.SEARCH_FAIL};
  }
}
