import { Component, OnInit } from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {ProjectListState} from '../../project-list.state';
import {ProjectListActions} from '../../project-list.actions';
import {ProjectsState} from '../../../projects/projects.state';

@Component({
  selector: 'app-add-project-list-modal',
  templateUrl: './add-project-list-modal.component.html',
  styleUrls: ['./add-project-list-modal.component.css']
})
export class AddProjectListModalComponent implements OnInit {

  @select('projectList') projectList$: Observable<ProjectListState>;
  @select('projects') projects$: Observable<ProjectsState>;

  constructor(private projectListActions: ProjectListActions) { }

  ngOnInit() {
  }

  @dispatch()
  hideAddProjectListModal() {
    return this.projectListActions.hideAddProjectListModal();
  }

  @dispatch()
  addProjectList() {
    return this.projectListActions.addProjectList();
  }
}
