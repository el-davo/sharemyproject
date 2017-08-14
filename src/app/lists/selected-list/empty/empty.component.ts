import {Component} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {ListActions} from '../../list.actions';

@Component({
  selector: 'app-selected-list-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent {

  constructor(private listActions: ListActions) {
  }

  @dispatch()
  showAddLinkToListModal() {
    return this.listActions.showAddLinkToListModal();
  }
}
