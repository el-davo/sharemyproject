import {Injectable} from '@angular/core';
import {List} from '../lists/list.state';

@Injectable()
export class SearchActions {

  static SEARCH = 'search/SEARCH';
  static SEARCH_SUCCESS = 'search/SEARCH_SUCCESS';
  static SEARCH_FAIL = 'search/SEARCH_FAIL';

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
