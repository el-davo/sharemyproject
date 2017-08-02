import { Component, OnInit } from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {Project, ProjectsState} from '../projects.state';
import {ProjectsActions} from '../projects.actions';

@Component({
  selector: 'app-projects-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @select('projects') projects$: Observable<ProjectsState>;

  constructor(private projectsActions: ProjectsActions) {}

  @dispatch()
  showDeleteProjectModal(project: Project) {
    return this.projectsActions.showDeleteProjectModal(project);
  }

}
