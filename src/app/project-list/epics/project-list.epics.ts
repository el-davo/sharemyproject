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

  fetchSelectedListProjects = action$ => {
    return action$.ofType(ProjectListActions.FETCH_SELECTED_LIST_PROJECTS)
      .mergeMap(({listId}) => {
        return this.projectListService.fetchSelectedListProject(listId)
          .map(projects => this.projectListActions.fetchSelectedListProjectsSuccess(projects))
          .catch(err => Observable.of(this.projectListActions.fetchSelectedListProjectsFail()));
      });
  };

  addProjectList = (action$, store) => {
    return action$.ofType(ProjectListActions.ADD_PROJECT_LIST)
      .mergeMap(() => {
        const projectListForm = store.getState().projectList.addProjectListForm;

        return this.projectListService.addProjectList(projectListForm)
          .mergeMap(projectList => Observable.concat(
            Observable.of(this.projectListActions.addProjectListSuccess(projectList)),
            Observable.of(this.projectListActions.hideAddProjectListModal())
          ))
          .catch(err => Observable.of(this.projectListActions.addProjectListFail()));
      });
  };

}
