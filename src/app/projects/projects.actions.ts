import {Injectable} from '@angular/core';
import {Project} from './projects.state';

@Injectable()
export class ProjectsActions {

  static FETCH_PROJECTS = 'projects/FETCH_PROJECTS';
  static FETCH_PROJECTS_SUCCESS = 'projects/FETCH_PROJECTS_SUCCESS';
  static FETCH_PROJECTS_FAIL = 'projects/FETCH_PROJECTS_FAIL';

  fetchProjects() {
    return {type: ProjectsActions.FETCH_PROJECTS};
  }

  fetchProjectsSuccess(projects: Project[]) {
    return {type: ProjectsActions.FETCH_PROJECTS_SUCCESS, projects};
  }

  fetchProjectsFail() {
    return {type: ProjectsActions.FETCH_PROJECTS_FAIL};
  }
}
