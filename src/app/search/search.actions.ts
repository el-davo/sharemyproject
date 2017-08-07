import {Injectable} from '@angular/core';
import {List} from '../lists/list.state';

@Injectable()
export class SearchActions {

  static SHOW_SEARCH_OVERLAY = 'search/SHOW_SEARCH_OVERLAY';
  static HIDE_SEARCH_OVERLAY = 'search/HIDE_SEARCH_OVERLAY';

  static SEARCH = 'search/SEARCH';
  static SEARCH_SUCCESS_LISTS = 'search/SEARCH_SUCCESS_LISTS';
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

  searchSuccessLists(lists: List[]) {
    return {type: SearchActions.SEARCH_SUCCESS_LISTS, lists};
  }

  searchFail() {
    return {type: SearchActions.SEARCH_FAIL};
  }
}
