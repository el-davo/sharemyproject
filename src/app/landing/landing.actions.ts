import {Injectable} from '@angular/core';
import {List} from '../lists/list.state';

@Injectable()
export class LandingActions {

  static FETCH_LATEST_LISTS = 'landing/FETCH_LATEST_LISTS';
  static FETCH_LATEST_LISTS_SUCCESS = 'landing/FETCH_LATEST_LISTS_SUCCESS';
  static FETCH_LATEST_LISTS_FAIL = 'landing/FETCH_LATEST_LISTS_FAIL';

  fetchLatestLists() {
    return {type: LandingActions.FETCH_LATEST_LISTS};
  }

  fetchLatestListsSuccess(lists: List[]) {
    return {type: LandingActions.FETCH_LATEST_LISTS_SUCCESS, lists};
  }

  fetchLatestListsFail() {
    return {type: LandingActions.FETCH_LATEST_LISTS_FAIL};
  }
}
