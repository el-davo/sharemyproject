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

  fetchProjectList = (action$, store) => {
    return action$.ofType(ProjectListActions.FETCH_PROJECT_LIST)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;

        return this.projectListService.fetchProjectList(access_token)
          .map(projectList => this.projectListActions.fetchProjectListSuccess(projectList))
          .catch(err => Observable.of(this.projectListActions.fetchProjectListFail()));
      });
  };

  fetchSelectedListProjects = (action$, store) => {
    return action$.ofType(ProjectListActions.FETCH_SELECTED_LIST_PROJECTS)
      .mergeMap(({listId}) => {
        const {access_token} = store.getState().login.auth;

        return this.projectListService.fetchSelectedListProject(access_token, listId)
          .map(projects => this.projectListActions.fetchSelectedListProjectsSuccess(projects))
          .catch(err => Observable.of(this.projectListActions.fetchSelectedListProjectsFail()));
      });
  };

  addProjectList = (action$, store) => {
    return action$.ofType(ProjectListActions.ADD_PROJECT_LIST)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;
        const {addProjectListForm} = store.getState().projectList;

        return this.projectListService.addProjectList(access_token, addProjectListForm)
          .mergeMap(projectList => Observable.concat(
            Observable.of(this.projectListActions.addProjectListSuccess(projectList)),
            Observable.of(this.projectListActions.hideAddProjectListModal())
          ))
          .catch(err => Observable.of(this.projectListActions.addProjectListFail()));
      });
  };

  deleteProjectList = (action$, store) => {
    return action$.ofType(ProjectListActions.DELETE_PROJECT_LIST)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;
        const {deletingProjectList} = store.getState().projectList;

        return this.projectListService.deleteProjectList(access_token, deletingProjectList)
          .mergeMap(() => Observable.concat(
            Observable.of(this.projectListActions.deleteProjectListSuccess(deletingProjectList)),
            Observable.of(this.projectListActions.hideDeleteProjectListModal())
          ))
          .catch(err => Observable.of(this.projectListActions.deleteProjectListFail()));
      });
  };

}
