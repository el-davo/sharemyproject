import { Component, OnInit } from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {ProjectListActions} from './project-list.actions';
import {Observable} from 'rxjs/Observable';
import {ProjectList, ProjectListState} from './project-list.state';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @select('projectList') projectList$: Observable<ProjectListState>;

  constructor(private projectListActions: ProjectListActions) { }

  @dispatch()
  ngOnInit() {
    return this.projectListActions.fetchProjectList();
  }

  @dispatch()
  deleteList($event, projectList: ProjectList) {
    $event.stopPropagation();
    return this.projectListActions.showDeleteProjectListModal(projectList);
  }

}
