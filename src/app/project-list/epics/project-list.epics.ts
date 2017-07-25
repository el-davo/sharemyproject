import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ProjectListActions} from '../project-list.actions';
import {ProjectListService} from '../project-list.service';

@Injectable()
export class ProjectListEpics {
  constructor(private projectListService: ProjectListService, private projectListActions: ProjectListActions) {
  }

  fetchProjectList = action$ => {
    return action$.ofType(ProjectListActions.FETCH_PROJECT_LIST)
      .mergeMap(() => {
        return this.projectListService.fetchProjectList()
          .map(projectList => this.projectListActions.fetchProjectListSuccess(projectList))
          .catch(err => Observable.of(this.projectListActions.fetchProjectListFail()));
      });
  };

}
