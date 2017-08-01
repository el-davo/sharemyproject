import {Injectable} from '@angular/core';
import {Auth} from './login.state';
import {Identity, SocialUser} from './social/social-user.interface';

@Injectable()
export class LoginActions {

  static LOGIN_FACEBOOK = 'login/LOGIN_FACEBOOK';
  static LOGIN_GITHUB = 'login/LOGIN_GITHUB';
  static AUTH_COMPLETE = 'login/AUTH_COMPLETE';
  static LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
  static LOGIN_FAIL = 'login/LOGIN_FAIL';

  loginFacebook() {
    return {type: LoginActions.LOGIN_FACEBOOK};
  }

  loginGithub() {
    return {type: LoginActions.LOGIN_GITHUB};
  }

  authComplete(auth: Auth) {
    return {type: LoginActions.AUTH_COMPLETE, auth};
  }

  loginSuccess(socialUser: SocialUser<Identity>) {
    return {type: LoginActions.LOGIN_SUCCESS, socialUser};
  }

  loginFail() {
    return {type: LoginActions.LOGIN_FAIL};
  }
}
