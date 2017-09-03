import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/delay';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TokensActions} from '../tokens/tokens.actions';
import {TokensService} from '../tokens.service';
import {ToasterService} from 'angular2-toaster';
import {S3Actions} from '../s3/s3.actions';
import {S3Service} from '../s3/s3.service';

@Injectable()
export class ScreenshotTokensEpics {
  constructor(private toaster: ToasterService,
              private tokensService: TokensService,
              private tokensActions: TokensActions,
              private s3Actions: S3Actions,
              private s3Service: S3Service) {
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

            this.toaster.pop('success', 'Success', 'New token has been created');

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

            this.toaster.pop('success', 'Success', 'Token has been deleted successfully');

            return Observable.concat(
              Observable.of(this.tokensActions.deleteUserTokenSuccess(deletingToken)),
              Observable.of(this.tokensActions.hideDeleteUserTokenModal()))
          })
          .catch(err => Observable.of(this.tokensActions.fetchUserTokensFail()));
      });
  };

  fetchS3Config = (action$, store) => {
    return action$.ofType(S3Actions.FETCH_S3_CONFIGS)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;

        return this.s3Service.fetchS3Configs(access_token)
          .map(s3Configs => this.s3Actions.fetchS3ConfigsSuccess(s3Configs))
          .catch(err => Observable.of(this.s3Actions.fetchS3ConfigsFail()));
      });
  };

  verifyS3Config = (action$, store) => {
    return action$.ofType(S3Actions.VERIFY_S3_CONFIG)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;
        const {s3ConfigForm} = store.getState().s3;

        return this.s3Service.verifyS3Config(access_token, s3ConfigForm)
          .map(success => {
            return success ? this.s3Actions.verifyS3ConfigSuccess() : this.s3Actions.verifyS3ConfigFail();
          })
          .delay(1500)
          .catch(err => Observable.of(this.s3Actions.verifyS3ConfigFail()));
      });
  };

  addS3Config = (action$, store) => {
    return action$.ofType(S3Actions.ADD_S3_CONFIG)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;
        const {id} = store.getState().login.userData.user;
        const {s3ConfigForm} = store.getState().s3;

        return this.s3Service.addS3Config(access_token, id, s3ConfigForm)
          .mergeMap(s3Config => {
            this.toaster.pop('success', 'Success', 'S3 Configuration has been added successfully');

            return Observable.concat(
              Observable.of(this.s3Actions.addS3ConfigSuccess(s3Config)),
              Observable.of(this.s3Actions.hideAddS3WizardModal())
            )
          })
          .catch(err => Observable.of(this.s3Actions.addS3ConfigFail()));
      });
  };

  deleteS3Config = (action$, store) => {
    return action$.ofType(S3Actions.DELETE_S3_CONFIG)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;
        const {deletingS3Config} = store.getState().s3;

        return this.s3Service.deleteS3Config(access_token, deletingS3Config)
          .mergeMap(() => {
            this.toaster.pop('success', 'Success', 'S3 Configuration has been deleted successfully');

            return Observable.concat(
              Observable.of(this.s3Actions.deleteS3ConfigSuccess(deletingS3Config)),
              Observable.of(this.s3Actions.hideDeleteS3ConfigModal())
            )
          })
          .catch(err => Observable.of(this.s3Actions.deleteS3ConfigFail()));
      });
  };
}
