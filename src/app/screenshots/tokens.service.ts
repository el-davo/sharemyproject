import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {urls} from '../common/urls';

@Injectable()
export class TokensService {

  constructor(private http: Http) {
  }

  fetchUserTokens(authorization: string) {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.get(`${urls.screenshotsTokensApi}/tokens`, options).map(res => res.json());
  }
}
