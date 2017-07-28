import {Injectable} from '@angular/core';
import {User} from './login.state';

@Injectable()
export class LoginActions {

  static LOGIN = 'login/LOGIN';
  static LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
  static LOGIN_FAIL = 'login/LOGIN_FAIL';

  login() {
    return {type: LoginActions.LOGIN};
  }

  loginSuccess(user: User) {
    return {type: LoginActions.LOGIN_SUCCESS, user};
  }

  loginFail() {
    return {type: LoginActions.LOGIN_FAIL};
  }
}
