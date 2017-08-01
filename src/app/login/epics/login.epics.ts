import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/fromEvent';
import {Injectable} from '@angular/core';
import {LoginActions} from '../login.actions';
import {LoginService} from '../login.service';
import {Observable} from 'rxjs/Observable';
import {FacebookIdentity} from '../social/facebook.interface';
import {GithubIdentity} from '../social/github.interface';

@Injectable()
export class LoginEpics {
  constructor(private loginService: LoginService, private loginActions: LoginActions) {
  }

  socialLoginFacebook = action$ => {
    return action$.ofType(LoginActions.LOGIN_FACEBOOK)
      .mergeMap(() => {

        this.loginService.socialLogin('auth/facebook');

        return Observable.fromEvent(window, 'message')
          .mergeMap((event: any) => Observable.concat(
            Observable.of(this.loginActions.authComplete(event.data)),
            this.loginService.getUserInformation<FacebookIdentity>()
              .map(userData => this.loginActions.loginSuccess(userData))
          ))
          .catch(err => Observable.of(this.loginActions.loginFail()));
      });
  };

  socialLoginGithub = action$ => {
    return action$.ofType(LoginActions.LOGIN_GITHUB)
      .mergeMap(() => {

        this.loginService.socialLogin('auth/github');

        return Observable.fromEvent(window, 'message')
          .mergeMap((event: any) => Observable.concat(
            Observable.of(this.loginActions.authComplete(event.data)),
            this.loginService.getUserInformation<GithubIdentity>()
              .map(userData => this.loginActions.loginSuccess(userData))
          ))
          .catch(err => Observable.of(this.loginActions.loginFail()));
      });
  };


}
