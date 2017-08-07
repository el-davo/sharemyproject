import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SearchService} from '../search.service';
import {SearchActions} from '../search.actions'

@Injectable()
export class SearchEpics {
  constructor(private searchService: SearchService, private searchActions: SearchActions) {
  }

  search = (action$) => {
    return action$.ofType(SearchActions.SEARCH)
      .mergeMap(({term}) => {

        return this.searchService.search(term)
          .map(lists => this.searchActions.searchSuccessLists(lists))
          .catch(err => Observable.of(this.searchActions.searchFail()));
      });
  };
}
