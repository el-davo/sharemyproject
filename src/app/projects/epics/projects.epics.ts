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
}
