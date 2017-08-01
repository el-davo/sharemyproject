import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {urls} from '../common/urls';
import {Observable} from 'rxjs/Observable';
import {SocialUser} from './social/social-user.interface';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  socialLogin(api: string) {
    window.open(`https://sharemyproject-backend.cfapps.io/${api}`, 'name', 'width=400,height=400');
  }

  getUserInformation<T>(): Observable<SocialUser<T>> {
    return this.http.get(`${urls.apiUrl}/me`).map(res => res.json());
  }
}
