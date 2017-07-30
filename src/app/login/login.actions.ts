import {Injectable} from '@angular/core';
import {Auth, UserData} from './login.state';

@Injectable()
export class LoginActions {

  static LOGIN_FACEBOOK = 'login/LOGIN_FACEBOOK';
  static AUTH_COMPLETE = 'login/AUTH_COMPLETE';
  static LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
  static LOGIN_FAIL = 'login/LOGIN_FAIL';

  loginFacebook() {
    return {type: LoginActions.LOGIN_FACEBOOK};
  }

  authComplete(auth: Auth) {
    return {type: LoginActions.AUTH_COMPLETE, auth};
  }

  loginSuccess(userData: UserData) {
    return {type: LoginActions.LOGIN_SUCCESS, userData};
  }

  loginFail() {
    return {type: LoginActions.LOGIN_FAIL};
  }
}
