import {Injectable} from '@angular/core';
import {User} from './navbar.state';

@Injectable()
export class NavbarActions {

  static FETCH_USER_INFO = 'navbar/FETCH_USER_INFO';
  static FETCH_USER_INFO_SUCCESS = 'navbar/FETCH_USER_INFO_SUCCESS';
  static FETCH_USER_INFO_FAIL = 'navbar/FETCH_USER_INFO_FAIL';

  fetchUserInfo() {
    return {type: NavbarActions.FETCH_USER_INFO};
  }

  fetchUserInfoSuccess(user: User) {
    return {type: NavbarActions.FETCH_USER_INFO_SUCCESS, user};
  }

  fetchUserInfoFail() {
    return {type: NavbarActions.FETCH_USER_INFO_FAIL};
  }
}
