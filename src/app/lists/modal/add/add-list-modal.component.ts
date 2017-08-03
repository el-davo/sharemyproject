import { Component, OnInit } from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {ListState} from '../../list.state';
import {ListActions} from '../../list.actions';
import {LinksState} from '../../../links/links.state';

@Component({
  selector: 'app-add-project-list-modal',
  templateUrl: './add-list-modal.component.html',
  styleUrls: ['./add-list-modal.component.css']
})
export class AddListModalComponent implements OnInit {

  @select('lists') lists$: Observable<ListState>;
  @select('links') links$: Observable<LinksState>;

  constructor(private projectListActions: ListActions) { }

  ngOnInit() {
  }

  @dispatch()
  hideAddProjectListModal() {
    return this.projectListActions.hideAddListModal();
  }

  @dispatch()
  addProjectList() {
    return this.projectListActions.addList();
  }
}
