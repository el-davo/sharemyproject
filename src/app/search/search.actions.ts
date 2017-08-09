import {Injectable} from '@angular/core';
import {List} from '../lists/list.state';
import {Link} from '../links/links.state';

@Injectable()
export class SearchActions {

  static SHOW_SEARCH_OVERLAY = 'search/SHOW_SEARCH_OVERLAY';
  static HIDE_SEARCH_OVERLAY = 'search/HIDE_SEARCH_OVERLAY';

  static SEARCH = 'search/SEARCH';
  static SEARCH_SUCCESS_LISTS = 'search/SEARCH_SUCCESS_LISTS';
  static SEARCH_FAIL = 'search/SEARCH_FAIL';

  static FETCH_SELECTED_SEARCH_LIST = 'search/FETCH_SELECTED_SEARCH_LIST';
  static FETCH_SELECTED_SEARCH_LIST_SUCCESS = 'search/FETCH_SELECTED_SEARCH_LIST_SUCCESS';
  static FETCH_SELECTED_SEARCH_LIST_FAIL = 'search/FETCH_SELECTED_SEARCH_LIST_FAIL';

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

  fetchSelectedSearchList(listId: string) {
    return {type: SearchActions.FETCH_SELECTED_SEARCH_LIST, listId};
  }

  fetchSelectedSearchListSuccess(links: Link[]) {
    return {type: SearchActions.FETCH_SELECTED_SEARCH_LIST_SUCCESS, links};
  }

  fetchSelectedSearchListFail() {
    return {type: SearchActions.FETCH_SELECTED_SEARCH_LIST_FAIL};
  }
}
