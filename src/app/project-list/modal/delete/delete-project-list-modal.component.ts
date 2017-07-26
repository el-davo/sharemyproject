import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {ProjectListState} from '../../project-list.state';
import {ProjectListActions} from '../../project-list.actions';

@Component({
  selector: 'app-delete-project-list-modal',
  templateUrl: './delete-project-list-modal.component.html',
  styleUrls: ['./delete-project-list-modal.component.css']
})
export class DeleteProjectListModalComponent {

  @select('projectList') projectList$: Observable<ProjectListState>;
  constructor(private projectLIstActions: ProjectListActions) { }

  @dispatch()
  hideDeleteProjectListModal() {
    return this.projectLIstActions.hideDeleteProjectListModal();
  }

  @dispatch()
  deleteProjectList() {
    return this.projectLIstActions.deleteProjectList();
  }
}
