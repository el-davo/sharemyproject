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
import {Router} from '@angular/router';

@Injectable()
export class LoginEpics {
  constructor(private loginService: LoginService,
              private loginActions: LoginActions,
              private router: Router) {
  }

  socialLoginFacebook = action$ => {
    return action$.ofType(LoginActions.LOGIN_FACEBOOK)
      .mergeMap(() => {

        this.loginService.socialLogin('auth/facebook');

        return Observable.fromEvent(window, 'message')
          .mergeMap((event: any) => {
            localStorage.setItem('access_token', event.data.access_token);

            return Observable.concat(
              Observable.of(this.loginActions.authComplete(event.data)),
              this.loginService.getUserInformation<FacebookIdentity>(event.data.access_token)
                .map(userData => {
                  this.router.navigate(['/links']);
                  return this.loginActions.loginSuccess(userData)
                })
            )
          })
          .catch(err => Observable.of(this.loginActions.loginFail()));
      });
  };

  socialLoginGithub = action$ => {
    return action$.ofType(LoginActions.LOGIN_GITHUB)
      .mergeMap(() => {

        this.loginService.socialLogin('auth/github');

        return Observable.fromEvent(window, 'message')
          .mergeMap((event: any) => {
            localStorage.setItem('access_token', event.data.access_token);

            return Observable.concat(
              Observable.of(this.loginActions.authComplete(event.data)),
              this.loginService.getUserInformation<GithubIdentity>(event.data.access_token)
                .map(userData => {
                  this.router.navigate(['/links']);
                  return this.loginActions.loginSuccess(userData)
                })
            )
          })
          .catch(err => Observable.of(this.loginActions.loginFail()));
      });
  };

  logout = (action$, store) => {
    return action$.ofType(LoginActions.LOGOUT)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;

        return this.loginService.logout(access_token).map(() => {
          localStorage.removeItem('access_token');

          this.router.navigate(['/login']);

          return this.loginActions.logoutSuccess();
        })
          .catch(err => Observable.of(this.loginActions.logoutFail()));
      });
  };

}
