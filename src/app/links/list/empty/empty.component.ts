import {Component} from '@angular/core';
import {LinksActions} from '../../links.actions';
import {dispatch} from '@angular-redux/store';

@Component({
  selector: 'app-list-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent {

  constructor(private linksActions: LinksActions) {
  }

  @dispatch()
  showAddLinkModal() {
    return this.linksActions.showAddLinkModal();
  }
}
