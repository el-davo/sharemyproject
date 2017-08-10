import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {urls} from '../common/urls';
import {Observable} from 'rxjs/Observable';
import {SocialUser} from './social/social-user.interface';

@Injectable()
export class LoginService {

  constructor(private http: Http) {
  }

  socialLogin(api: string) {
    window.open(`${urls.authUrl}/${api}`, 'name', 'width=400,height=400');
  }

  getUserInformation<T>(authorization: string): Observable<SocialUser<T>> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.get(`${urls.apiUrl}/me`, options).map(res => res.json().info);
  }

  logout(authorization: string): Observable<any> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.post(`${urls.apiUrl}/users/logout`, options).map(res => res);
  }
}
