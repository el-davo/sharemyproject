import {Injectable} from '@angular/core';
import {ProjectList} from './project-list.state';

@Injectable()
export class ProjectListActions {

  static FETCH_PROJECT_LIST = 'project-list/FETCH_PROJECT_LIST';
  static FETCH_PROJECT_LIST_SUCCESS = 'project-list/FETCH_PROJECT_LIST_SUCCESS';
  static FETCH_PROJECT_LIST_FAIL = 'project-list/FETCH_PROJECT_LIST_FAIL';

  fetchProjectList() {
    return {type: ProjectListActions.FETCH_PROJECT_LIST};
  }

  fetchProjectListSuccess(projectList: ProjectList[]) {
    return {type: ProjectListActions.FETCH_PROJECT_LIST_SUCCESS, projectList};
  }

  fetchProjectListFail() {
    return {type: ProjectListActions.FETCH_PROJECT_LIST_FAIL};
  }
}
