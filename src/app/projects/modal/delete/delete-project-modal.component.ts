import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {ProjectsState} from '../../projects.state';
import {ProjectsActions} from '../../projects.actions';

@Component({
  selector: 'app-delete-project-modal',
  templateUrl: './delete-project-modal.component.html',
  styleUrls: ['./delete-project-modal.component.css']
})
export class DeleteProjectModalComponent {

  @select('projects') projects$: Observable<ProjectsState>;

  constructor(private projectsActions: ProjectsActions) { }

  @dispatch()
  hideDeleteProjectModal() {
    return this.projectsActions.hideDeleteProjectModal();
  }

  @dispatch()
  deleteProject() {
    return this.projectsActions.deleteProject();
  }
}
