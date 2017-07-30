import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {urls} from '../common/urls';
import {UserData} from './login.state';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  socialLogin(social: string) {
    window.open(`https://sharemyproject-backend.cfapps.io/${social}`, 'name', 'width=400,height=400');
  }

  getUserInformation(): Observable<UserData> {
    return this.http.get(`${urls.apiUrl}/me`).map(res => res.json());
  }
}
