import {LoginState, loginState} from './login.state';
import {LoginActions} from './login.actions';

export const loginReducer = (state: LoginState = loginState, action): LoginState => {
  switch (action.type) {
    case LoginActions.LOGIN_FACEBOOK:
      return {...state, isLoggingIn: true};
    case LoginActions.AUTH_COMPLETE:
      return {...state, auth: action.auth};
    case LoginActions.LOGIN_SUCCESS:
      return {...state, isLoggingIn: false, isLoggedIn: true, userData: action.socialUser};
    case LoginActions.LOGIN_FAIL:
      return {...state, isLoggingIn: false, hasLoginFailed: true};
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
