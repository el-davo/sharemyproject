import {Component} from '@angular/core';
import {ListActions} from '../list.actions';
import {dispatch} from '@angular-redux/store';

@Component({
  selector: 'app-lists-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class ListEmptyComponent {

  constructor(private listActions: ListActions) {
  }

  @dispatch()
  showAddListModal() {
    return this.listActions.showAddListModal();
  }
}
