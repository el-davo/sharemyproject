import {Injectable} from '@angular/core';
import {Project} from './projects.state';

@Injectable()
export class ProjectsActions {

  static FETCH_PROJECTS = 'projects/FETCH_PROJECTS';
  static FETCH_PROJECTS_SUCCESS = 'projects/FETCH_PROJECTS_SUCCESS';
  static FETCH_PROJECTS_FAIL = 'projects/FETCH_PROJECTS_FAIL';

  static SHOW_ADD_PROJECT_MODAL = 'projects/SHOW_ADD_PROJECT_MODAL';
  static HIDE_ADD_PROJECT_MODAL = 'projects/HIDE_ADD_PROJECT_MODAL';

  static ADD_PROJECT = 'projects/ADD_PROJECT';
  static ADD_PROJECT_SUCCESS = 'projects/ADD_PROJECT_SUCCESS';
  static ADD_PROJECT_FAIL = 'projects/ADD_PROJECT_FAIL';

  static SHOW_DELETE_PROJECT_MODAL = 'projects/SHOW_DELETE_PROJECT_MODAL';
  static HIDE_DELETE_PROJECT_MODAL = 'projects/HIDE_DELETE_PROJECT_MODAL';

  static DELETE_PROJECT = 'projects/DELETE_PROJECT';
  static DELETE_PROJECT_SUCCESS = 'projects/DELETE_PROJECT_SUCCESS';
  static DELETE_PROJECT_FAIL = 'projects/DELETE_PROJECT_FAIL';

  fetchProjects() {
    return {type: ProjectsActions.FETCH_PROJECTS};
  }

  fetchProjectsSuccess(projects: Project[]) {
    return {type: ProjectsActions.FETCH_PROJECTS_SUCCESS, projects};
  }

  fetchProjectsFail() {
    return {type: ProjectsActions.FETCH_PROJECTS_FAIL};
  }

  showAddProjectModal() {
    return {type: ProjectsActions.SHOW_ADD_PROJECT_MODAL};
  }

  hideAddProjectModal() {
    return {type: ProjectsActions.HIDE_ADD_PROJECT_MODAL};
  }

  addProject() {
    return {type: ProjectsActions.ADD_PROJECT};
  }

  addProjectSuccess(project: Project) {
    return {type: ProjectsActions.ADD_PROJECT_SUCCESS, project};
  }

  addProjectFail() {
    return {type: ProjectsActions.ADD_PROJECT_FAIL};
  }

  showDeleteProjectModal(project: Project) {
    return {type: ProjectsActions.SHOW_DELETE_PROJECT_MODAL, project};
  }

  hideDeleteProjectModal() {
    return {type: ProjectsActions.HIDE_DELETE_PROJECT_MODAL};
  }

  deleteProject() {
    return {type: ProjectsActions.DELETE_PROJECT};
  }

  deleteProjectSuccess(project: Project) {
    return {type: ProjectsActions.DELETE_PROJECT_SUCCESS, project};
  }

  deleteProjectFail() {
    return {type: ProjectsActions.DELETE_PROJECT_FAIL};
  }
}
