import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/fromEvent';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../../login/login.service';
import {LoginActions} from '../../login/login.actions';
import {InitActions} from '../init.actions';
import {Identity} from '../../login/social/social-user.interface';

@Injectable()
export class InitEpics {
  constructor(private initActions: InitActions,
              private loginService: LoginService,
              private loginActions: LoginActions) {
  }

  appInit = action$ => {
    return action$.ofType(InitActions.APP_INIT)
      .mergeMap(() => {
        const access_token = localStorage.getItem('access_token');

        if (!access_token) {
          return Observable.of(this.initActions.appInitSuccess());
        }

        return Observable.concat(
          this.loginService.getUserInformation<Identity>(access_token).map(this.loginActions.loginSuccess),
          Observable.of(this.initActions.appInitSuccess())
        )
      })
      .catch(this.loginActions.loginFail);
  };

}
