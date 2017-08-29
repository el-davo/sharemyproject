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
}
