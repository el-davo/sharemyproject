import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {List} from './lists/list.state';
import {urls} from './common/urls';

@Injectable()
export class SearchService {

  constructor(private http: Http) {
  }

  search(term: string): Observable<List[]> {
    return this.http.get(`${urls.apiUrl}/lists?filter={"limit": 10, "where":{"name":{"like":"${term}%"}}}`)
      .map(res => res.json());
  }

}
