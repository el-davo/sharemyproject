import {Component} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {ProjectsActions} from '../projects/projects.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private projectsActions: ProjectsActions) { }

  @dispatch()
  openAddProjectModal() {
    return this.projectsActions.showAddProjectModal();
  }

}
