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

  static SHOW_ADD_PROJECT_LIST_MODAL = 'project-list/SHOW_ADD_PROJECT_LIST_MODAL';
  static HIDE_ADD_PROJECT_LIST_MODAL = 'project-list/HIDE_ADD_PROJECT_LIST_MODAL';

  static ADD_PROJECT_LIST = 'project-list/ADD_PROJECT_LIST';
  static ADD_PROJECT_LIST_SUCCESS = 'project-list/ADD_PROJECT_LIST_SUCCESS';
  static ADD_PROJECT_LIST_FAIL = 'project-list/ADD_PROJECT_LIST_FAIL';

  static SHOW_DELETE_PROJECT_LIST_MODAL = 'project-list/SHOW_DELETE_PROJECT_LIST_MODAL';
  static HIDE_DELETE_PROJECT_LIST_MODAL = 'project-list/HIDE_DELETE_PROJECT_LIST_MODAL';

  static DELETE_PROJECT_LIST = 'project-list/DELETE_PROJECT_LIST';
  static DELETE_PROJECT_LIST_SUCCESS = 'project-list/DELETE_PROJECT_LIST_SUCCESS';
  static DELETE_PROJECT_LIST_FAIL = 'project-list/DELETE_PROJECT_LIST_FAIL';

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

  showAddProjectListModal() {
    return {type: ProjectListActions.SHOW_ADD_PROJECT_LIST_MODAL};
  }

  hideAddProjectListModal() {
    return {type: ProjectListActions.HIDE_ADD_PROJECT_LIST_MODAL};
  }

  addProjectList() {
    return {type: ProjectListActions.ADD_PROJECT_LIST};
  }

  addProjectListSuccess(projectList: ProjectList) {
    return {type: ProjectListActions.ADD_PROJECT_LIST_SUCCESS, projectList};
  }

  addProjectListFail() {
    return {type: ProjectListActions.ADD_PROJECT_LIST_FAIL};
  }

  showDeleteProjectListModal(projectList: ProjectList) {
    return {type: ProjectListActions.SHOW_DELETE_PROJECT_LIST_MODAL, projectList};
  }

  hideDeleteProjectListModal() {
    return {type: ProjectListActions.HIDE_DELETE_PROJECT_LIST_MODAL};
  }

  deleteProjectList() {
    return {type: ProjectListActions.DELETE_PROJECT_LIST};
  }

  deleteProjectListSuccess(projectList: ProjectList) {
    return {type: ProjectListActions.DELETE_PROJECT_LIST_SUCCESS, projectList};
  }

  deleteProjectListFail() {
    return {type: ProjectListActions.DELETE_PROJECT_LIST_FAIL};
  }
}
