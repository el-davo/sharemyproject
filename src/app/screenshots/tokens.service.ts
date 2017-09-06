import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {urls} from '../common/urls';
import {Token} from './tokens/tokens.state';

@Injectable()
export class TokensService {

  constructor(private http: Http) {
  }

  fetchUserTokens(authorization: string) {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.get(`${urls.screenshotsTokensApi}/tokens`, options).map(res => res.json().tokens);
  }

  addUserToken(authorization: string, token: Token) {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.post(`${urls.screenshotsTokensApi}/tokens`, token, options).map(res => res.json().token);
  }

  deleteUserToken(authorization: string, token: Token) {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.delete(`${urls.screenshotsTokensApi}/tokens/?tokenId=${token.id}`, options)
      .map(res => res.json());
  }
}
