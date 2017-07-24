import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {ProjectsState} from '../projects.state';
import {ProjectsActions} from '../projects.actions';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.css']
})
export class AddProjectModalComponent {

  @select('projects') projects$: Observable<ProjectsState>;

  constructor(private projectsActions: ProjectsActions) { }

  @dispatch()
  hideAddProjectModal() {
    return this.projectsActions.hideAddProjectModal();
  }

  @dispatch()
  addProject() {
    return this.projectsActions.addProject();
  }
}
