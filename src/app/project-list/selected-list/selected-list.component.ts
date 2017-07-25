import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectListActions} from '../project-list.actions';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {ProjectListState} from '../project-list.state';

@Component({
  selector: 'app-selected-list',
  templateUrl: './selected-list.component.html',
  styleUrls: ['./selected-list.component.css']
})
export class SelectedListComponent implements OnInit {

  @select('projectList') projectList$: Observable<ProjectListState>;

  constructor(private route: ActivatedRoute, private projectListActions: ProjectListActions) { }

  ngOnInit() {
    this.route.params.subscribe(({id}) => this.fetchSelectedListProjects(id));
  }

  @dispatch()
  fetchSelectedListProjects(id) {
    return this.projectListActions.fetchSelectedListProjects(id)
  }

}
