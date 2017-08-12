import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {urls} from './urls';
import {Observable} from 'rxjs/Observable';
import {Identity} from '../login/social/social-user.interface';
import {FacebookIdentity} from '../login/social/facebook.interface';
import {GithubIdentity} from '../login/social/github.interface';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getUserIdentity(userId: string): Observable<Identity> {
    return this.http.get(`${urls.apiUrl}/userIdentityPublic?userId=${userId}`).map(res => res.json().identity);
  }

}
