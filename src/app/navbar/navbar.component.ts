import {Component} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {ProjectsActions} from '../projects/projects.actions';
import {ProjectListActions} from '../project-list/project-list.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private projectsActions: ProjectsActions, private projectListActions: ProjectListActions) { }

  @dispatch()
  openAddProjectModal() {
    return this.projectsActions.showAddProjectModal();
  }

  @dispatch()
  openAddProjectListModal() {
    return this.projectListActions.showAddProjectListModal();
  }

}
