import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/forkJoin';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SearchService} from '../search.service';
import {SearchActions} from '../search.actions'
import {ListsService} from '../../lists/list.service';
import {UserService} from '../../common/user.service';
import {SelectedSearchList} from '../search.state';

@Injectable()
export class SearchEpics {
  constructor(private searchService: SearchService,
              private searchActions: SearchActions,
              private listsService: ListsService,
              private userService: UserService) {
  }

  search = (action$) => {
    return action$.ofType(SearchActions.SEARCH)
      .mergeMap(({term}) => {

        return this.searchService.search(term)
          .map(results => this.searchActions.searchSuccessLists(results.lists))
          .catch(err => Observable.of(this.searchActions.searchFail()));
      });
  };

  fetchSelectedSearchList = action$ => {
    return action$.ofType(SearchActions.FETCH_SELECTED_SEARCH_LIST)
      .mergeMap(({listId}) => {
        return this.listsService.fetchList(listId)
          .flatMap(list => Observable.forkJoin(
            this.userService.getUserIdentity(list.user.id).take(1),
            this.listsService.fetchSelectedListProject(listId).take(1)
          ))
          .flatMap(([userIdentity, list]) => {
            return Observable
              .of(this.searchActions.fetchSelectedSearchListSuccess({userIdentity, list}));
          })
      });
  };
}
