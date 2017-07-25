import {Injectable} from '@angular/core';
import {ProjectList} from './project-list.state';
import {Project} from '../projects/projects.state';

@Injectable()
export class ProjectListActions {

  static FETCH_PROJECT_LIST = 'project-list/FETCH_PROJECT_LIST';
  static FETCH_PROJECT_LIST_SUCCESS = 'project-list/FETCH_PROJECT_LIST_SUCCESS';
  static FETCH_PROJECT_LIST_FAIL = 'project-list/FETCH_PROJECT_LIST_FAIL';

  static FETCH_SELECTED_LIST_PROJECTS = 'project-list/FETCH_SELECTED_LIST_PROJECTS';
  static FETCH_SELECTED_LIST_PROJECTS_SUCCESS = 'project-list/FETCH_SELECTED_LIST_PROJECTS_SUCCESS';
  static FETCH_SELECTED_LIST_PROJECTS_FAIL = 'project-list/FETCH_SELECTED_LIST_PROJECTS_FAIL';

  fetchProjectList() {
    return {type: ProjectListActions.FETCH_PROJECT_LIST};
  }

  fetchProjectListSuccess(projectList: ProjectList[]) {
    return {type: ProjectListActions.FETCH_PROJECT_LIST_SUCCESS, projectList};
  }

  fetchProjectListFail() {
    return {type: ProjectListActions.FETCH_PROJECT_LIST_FAIL};
  }

  fetchSelectedListProjects(listId: string) {
    return {type: ProjectListActions.FETCH_SELECTED_LIST_PROJECTS, listId};
  }

  fetchSelectedListProjectsSuccess(projects: Project[]) {
    return {type: ProjectListActions.FETCH_SELECTED_LIST_PROJECTS_SUCCESS, projects};
  }

  fetchSelectedListProjectsFail() {
    return {type: ProjectListActions.FETCH_SELECTED_LIST_PROJECTS_FAIL};
  }
}
