import { Component, OnInit } from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {ProjectsActions} from './projects.actions';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsActions: ProjectsActions) { }

  @dispatch()
  ngOnInit() {
    return this.projectsActions.fetchProjects();
  }

}
