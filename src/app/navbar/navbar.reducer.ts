import {navbarState, NavbarState} from './navbar.state';
import {NavbarActions} from './navbar.actions';

export const navbarReducer = (state: NavbarState = navbarState, action): NavbarState => {
  switch (action.type) {
    case NavbarActions.FETCH_USER_INFO:
      return {...state, isFetchingUserInfo: true};
    case NavbarActions.FETCH_USER_INFO_SUCCESS:
      return {...state, isFetchingUserInfo: false, user: action.user};
    case NavbarActions.FETCH_USER_INFO_FAIL:
      return {...state, isFetchingUserInfo: false};
    default:
      return state;
  }
};
