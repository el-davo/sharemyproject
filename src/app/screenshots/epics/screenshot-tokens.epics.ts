import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TokensActions} from '../tokens/tokens.actions';
import {TokensService} from '../tokens.service';

@Injectable()
export class ScreenshotTokensEpics {
  constructor(private tokensService: TokensService, private tokensActions: TokensActions) {
  }

  fetchUserTokens = (action$, store) => {
    return action$.ofType(TokensActions.FETCH_USER_TOKENS)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;

        return this.tokensService.fetchUserTokens(access_token)
          .map(links => this.tokensActions.fetchUserTokensSuccess(links))
          .catch(err => Observable.of(this.tokensActions.fetchUserTokensFail()));
      });
  };

  addUserToken = (action$, store) => {
    return action$.ofType(TokensActions.ADD_USER_TOKEN)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;

        return this.tokensService.addUserToken(access_token)
          .mergeMap(token => {
            return Observable.concat(
              Observable.of(this.tokensActions.addUserTokenSuccess(token)),
              Observable.of(this.tokensActions.hideAddUserTokenModal()))
          })
          .catch(err => Observable.of(this.tokensActions.addUserTokenFail()));
      });
  };

  deleteUserToken = (action$, store) => {
    return action$.ofType(TokensActions.DELETE_USER_TOKEN)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;
        const {deletingToken} = store.getState().tokens;

        return this.tokensService.deleteUserToken(access_token, deletingToken)
          .mergeMap(() => {
            return Observable.concat(
              Observable.of(this.tokensActions.deleteUserTokenSuccess(deletingToken)),
              Observable.of(this.tokensActions.hideDeleteUserTokenModal()))
          })
          .catch(err => Observable.of(this.tokensActions.fetchUserTokensFail()));
      });
  };
}
