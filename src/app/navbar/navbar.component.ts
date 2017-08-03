import {Component} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {LinksActions} from '../links/links.actions';
import {ListActions} from '../lists/list.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private projectsActions: LinksActions, private projectListActions: ListActions) { }

  @dispatch()
  showAddLinkModal() {
    return this.projectsActions.showAddLinkModal();
  }

  @dispatch()
  showAddListModal() {
    return this.projectListActions.showAddListModal();
  }

}
