import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Link} from './links.state';
import {urls} from '../common/urls';

@Injectable()
export class LinksService {

  constructor(private http: Http) {
  }

  fetchProjects(authorization: string, userId: string): Observable<Link[]> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.get(`${urls.apiUrl}/users/${userId}/links`, options).map(res => res.json());
  }

  addProject(authorization: string, userId: string, link: Link): Observable<Link> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.post(`${urls.apiUrl}/users/${userId}/links`, link, options).map(res => res.json());
  }

  deleteProject(authorization: string, link: Link): Observable<Link> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.delete(`${urls.apiUrl}/links/${link.id}`, options).map(res => res.json());
  }

  editLink(authorization: string, link: Link): Observable<Link> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.patch(`${urls.apiUrl}/links/${link.id}`, link, options).map(res => res.json());
  }

}
