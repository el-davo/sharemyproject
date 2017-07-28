import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ProjectsService} from '../projects.service';
import {ProjectsActions} from '../projects.actions';

@Injectable()
export class ProjectsEpics {
  constructor(private projectsService: ProjectsService, private projectsActions: ProjectsActions) {
  }

  fetchProjects = action$ => {
    return action$.ofType(ProjectsActions.FETCH_PROJECTS)
      .mergeMap(() => {
        return this.projectsService.fetchProjects()
          .map(projects => this.projectsActions.fetchProjectsSuccess(projects))
          .catch(err => Observable.of(this.projectsActions.fetchProjectsFail()));
      });
  };

  addProject = (action$, store) => {
    return action$.ofType(ProjectsActions.ADD_PROJECT)
      .mergeMap(() => {
        const projectForm = store.getState().projects.addProjectForm;

        return this.projectsService.addProject(projectForm)
          .mergeMap(project => Observable.concat(
            Observable.of(this.projectsActions.addProjectSuccess(project)),
            Observable.of(this.projectsActions.hideAddProjectModal())
          ))
          .catch(err => Observable.of(this.projectsActions.addProjectFail()));
      });
  };

  deleteProject = (action$, store) => {
    return action$.ofType(ProjectsActions.DELETE_PROJECT)
      .mergeMap(() => {
        const {deletingProject} = store.getState().projects;

        return this.projectsService.deleteProject(deletingProject)
          .mergeMap(() => Observable.concat(
            Observable.of(this.projectsActions.deleteProjectSuccess(deletingProject)),
            Observable.of(this.projectsActions.hideDeleteProjectModal())
          ))
          .catch(err => Observable.of(this.projectsActions.deleteProjectFail()));
      });
  };
}
