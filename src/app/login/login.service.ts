import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {urls} from '../common/urls';
import {Observable} from 'rxjs/Observable';
import {SocialUser} from './social/social-user.interface';
@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  socialLogin(api: string) {
    window.open(`https://sharemyproject-backend.cfapps.io/${api}`, 'name', 'width=400,height=400');
  }

  getUserInformation<T>(authorization: string): Observable<SocialUser<T>> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.get(`${urls.apiUrl}/me`, options).map(res => res.json());
  }
}
