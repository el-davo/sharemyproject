import {navbarState, NavbarState} from './navbar.state';
import {NavbarActions} from './navbar.actions';

export const navbarReducer = (state: NavbarState = navbarState, action): NavbarState => {
  switch (action.type) {
    case NavbarActions.FETCH_USER_INFO:
      return {...state, isFetchingUserInfo: true};
    default:
      return state;
  }
};
