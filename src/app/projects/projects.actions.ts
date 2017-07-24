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
  static ADD_PROJECT_SUCCESS = 'project/ADD_PROJECT_SUCCESS';
  static ADD_PROJECT_FAIL = 'project/ADD_PROJECT_FAIL';

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
}
