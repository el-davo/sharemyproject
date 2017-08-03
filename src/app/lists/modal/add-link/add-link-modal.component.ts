import {Component, OnInit} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {ListState} from '../../list.state';
import {ListActions} from '../../list.actions';
import {LinksActions} from '../../../links/links.actions';
import {Link, LinksState} from '../../../links/links.state';

@Component({
  selector: 'app-add-link-modal',
  templateUrl: './add-link-modal.component.html',
  styleUrls: ['./add-link-modal.component.css']
})
export class AddLinkModalComponent implements OnInit {

  @select('lists') lists$: Observable<ListState>;
  @select(['links', 'links']) links$: Observable<Link[]>;

  constructor(private listActions: ListActions, private linksActions: LinksActions) {
  }

  @dispatch()
  ngOnInit() {
    return this.linksActions.fetchLinks();
  }

  @dispatch()
  hideAddLinkToListModal() {
    return this.listActions.hideAddLinkToListModal();
  }

  @dispatch()
  addLinkToList() {
    return this.listActions.addLinkToList();
  }

}
