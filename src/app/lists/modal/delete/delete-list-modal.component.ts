import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {ListState} from '../../list.state';
import {ListActions} from '../../list.actions';

@Component({
  selector: 'app-delete-project-list-modal',
  templateUrl: './delete-list-modal.component.html',
  styleUrls: ['./delete-list-modal.component.css']
})
export class DeleteListModalComponent {

  @select('lists') lists$: Observable<ListState>;
  constructor(private projectLIstActions: ListActions) { }

  @dispatch()
  hideDeleteProjectListModal() {
    return this.projectLIstActions.hideDeleteListModal();
  }

  @dispatch()
  deleteProjectList() {
    return this.projectLIstActions.deleteList();
  }
}
