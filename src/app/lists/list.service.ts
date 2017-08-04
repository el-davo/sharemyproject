import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {List} from './list.state';
import {urls} from '../common/urls';
import {Link} from '../links/links.state';

@Injectable()
export class ListsService {

  constructor(private http: Http) {
  }

  fetchProjectList(authorization: string, userId: string): Observable<List[]> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.get(`${urls.apiUrl}/users/${userId}/lists`, options).map(res => res.json());
  }

  fetchSelectedListProject(authorization: string, listId: string): Observable<Link[]> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.get(`${urls.apiUrl}/listsToLinks?filter={"include":["links"],"where":{"listId":${listId}}}`,
      options).map(res => res.json());
  }

  addProjectList(authorization: string, userId: string, list: List): Observable<List> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.post(`${urls.apiUrl}/users/${userId}/lists`, list, options).map(res => res.json());
  }

  deleteProjectList(authorization: string, list: List): Observable<List> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.delete(`${urls.apiUrl}/lists/${list.id}`, options).map(res => res.json());
  }

  addLinkToList(authorization: string, listId: string, linkId: Link): Observable<List> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.put(`${urls.apiUrl}/listsToLinks`, {listId, linkId}, options).map(res => res.json());
  }
}
