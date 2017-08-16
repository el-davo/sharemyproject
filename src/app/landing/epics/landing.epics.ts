import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {LandingActions} from '../landing.actions';
import {ListsService} from '../../lists/list.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LandingEpics {
  constructor(private landingActions: LandingActions, private listsService: ListsService) {
  }

  fetchLatestLists = action$ => {
    return action$.ofType(LandingActions.FETCH_LATEST_LISTS)
      .mergeMap(() => {

        return this.listsService.fetchLatestLists()
          .map(lists => this.landingActions.fetchLatestListsSuccess(lists))
          .catch(err => Observable.of(this.landingActions.fetchLatestListsFail()));
      });
  };

}
