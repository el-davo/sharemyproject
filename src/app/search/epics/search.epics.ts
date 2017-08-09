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
import {ListsService} from '../../lists/list.service';

@Injectable()
export class SearchEpics {
  constructor(private searchService: SearchService,
              private searchActions: SearchActions,
              private listsService: ListsService) {
  }

  search = (action$) => {
    return action$.ofType(SearchActions.SEARCH)
      .mergeMap(({term}) => {

        return this.searchService.search(term)
          .map(results => this.searchActions.searchSuccessLists(results.lists))
          .catch(err => Observable.of(this.searchActions.searchFail()));
      });
  };

  fetchSelectedSearchList = (action$, store) => {
    return action$.ofType(SearchActions.FETCH_SELECTED_SEARCH_LIST)
      .mergeMap(({listId}) => {
        const {access_token} = store.getState().login.auth;

        return this.listsService.fetchSelectedListProject(access_token, listId)
          .map(links => this.searchActions.fetchSelectedSearchListSuccess(links))
          .catch(err => Observable.of(this.searchActions.fetchSelectedSearchListFail()));
      });
  };
}
