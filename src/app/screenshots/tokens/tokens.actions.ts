import {Injectable} from '@angular/core';
import {Token} from './tokens.state';

@Injectable()
export class TokensActions {

  static SHOW_ADD_USER_TOKEN_MODAL = 'screenshots/tokens/SHOW_ADD_USER_TOKEN_MODAL';
  static SHOW_DELETE_USER_TOKEN_MODAL = 'screenshots/tokens/SHOW_DELETE_USER_TOKEN_MODAL';

  static HIDE_ADD_USER_TOKEN_MODAL = 'screenshots/tokens/HIDE_ADD_USER_TOKEN_MODAL';
  static HIDE_DELETE_USER_TOKEN_MODAL = 'screenshots/tokens/HIDE_DELETE_USER_TOKEN_MODAL';

  static FETCH_USER_TOKENS = 'screenshots/tokens/FETCH_USER_TOKENS';
  static FETCH_USER_TOKENS_SUCCESS = 'screenshots/tokens/FETCH_USER_TOKENS_SUCCESS';
  static FETCH_USER_TOKENS_FAIL = 'screenshots/tokens/FETCH_USER_TOKENS_FAIL';

  static ADD_USER_TOKEN = 'screenshots/tokens/ADD_USER_TOKEN';
  static ADD_USER_TOKEN_SUCCESS = 'screenshots/tokens/ADD_USER_TOKEN_SUCCESS';
  static ADD_USER_TOKEN_FAIL = 'screenshots/tokens/ADD_USER_TOKEN_FAIL';

  static DELETE_USER_TOKEN = 'screenshots/tokens/DELETE_USER_TOKEN';
  static DELETE_USER_TOKEN_SUCCESS = 'screenshots/tokens/DELETE_USER_TOKEN_SUCCESS';
  static DELETE_USER_TOKEN_FAIL = 'screenshots/tokens/DELETE_USER_TOKEN_FAIL';

  showAddUserTokenModal() {
    return {type: TokensActions.SHOW_ADD_USER_TOKEN_MODAL};
  }

  showDeleteUserTokenModal() {
    return {type: TokensActions.SHOW_DELETE_USER_TOKEN_MODAL};
  }

  hideAddUserTokenModal() {
    return {type: TokensActions.HIDE_ADD_USER_TOKEN_MODAL};
  }

  hideDeleteUserTokenModal() {
    return {type: TokensActions.HIDE_DELETE_USER_TOKEN_MODAL};
  }

  fetchUserTokesn() {
    return {type: TokensActions.FETCH_USER_TOKENS};
  }

  fetchUserTokensSuccess(tokens: Token[]) {
    return {type: TokensActions.FETCH_USER_TOKENS_SUCCESS, tokens};
  }

  fetchUserTokensFail() {
    return {type: TokensActions.FETCH_USER_TOKENS_FAIL};
  }

  addUserToken() {
    return {type: TokensActions.ADD_USER_TOKEN};
  }

  addUserTokenSuccess(token: Token) {
    return {type: TokensActions.ADD_USER_TOKEN_SUCCESS, token};
  }

  addUserTokenFail() {
    return {type: TokensActions.ADD_USER_TOKEN_FAIL};
  }

  deleteUserToken(token: Token) {
    return {type: TokensActions.DELETE_USER_TOKEN, token};
  }

  deleteUserTokenSuccess(token: Token) {
    return {type: TokensActions.DELETE_USER_TOKEN_SUCCESS, token};
  }

  deleteUserTokenFail() {
    return {type: TokensActions.DELETE_USER_TOKEN_FAIL};
  }
}
