import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {urls} from '../common/urls';
import {SearchResults} from './search.state';

@Injectable()
export class SearchService {

  constructor(private http: Http) {
  }

  search(term: string): Observable<SearchResults> {
    return this.http.get(`${urls.apiUrl}/search?term=${term}`)
      .map(res => res.json().results);
  }

}
