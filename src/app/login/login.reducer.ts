import {LoginState, loginState} from './login.state';
import {LoginActions} from './login.actions';

export const loginReducer = (state: LoginState = loginState, action): LoginState => {
  switch (action.type) {
    case LoginActions.SHOW_LOGIN_MODAL:
      return {...state, showLoginModal: true};
    case LoginActions.HIDE_LOGIN_MODAL:
      return {...state, showLoginModal: false};
    case LoginActions.LOGIN_FACEBOOK:
      return {...state, isLoggingIn: true};
    case LoginActions.AUTH_COMPLETE:
      return {...state, auth: action.auth};
    case LoginActions.LOGIN_SUCCESS:
      return {...state, isLoggingIn: false, isLoggedIn: true, userData: action.socialUser, showLoginModal: false};
    case LoginActions.LOGIN_FAIL:
      return {...state, isLoggingIn: false, hasLoginFailed: true};
    case LoginActions.SHOW_LOGOUT_MODAL:
      return {...state, showLogoutModal: true};
    case LoginActions.HIDE_LOGOUT_MODAL:
      return {...state, showLogoutModal: false};
    case LoginActions.LOGOUT:
      return {...state, isLoggingOut: true};
    case LoginActions.LOGOUT_SUCCESS:
      return {...state, isLoggingOut: false, isLoggedIn: false, userData: null};
    case LoginActions.LOGOUT_FAIL:
      return {...state, isLoggingOut: false};
    default:
      return state;
  }
};
