import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {LinksState} from '../../links.state';
import {LinksActions} from '../../links.actions';

@Component({
  selector: 'app-delete-project-modal',
  templateUrl: './delete-link-modal.component.html',
  styleUrls: ['./delete-link-modal.component.css']
})
export class DeleteLinkModalComponent {

  @select('links') links$: Observable<LinksState>;

  constructor(private linksActions: LinksActions) { }

  @dispatch()
  hideDeleteLinkModal() {
    return this.linksActions.hideDeleteLinkModal();
  }

  @dispatch()
  deleteLink() {
    return this.linksActions.deleteLink();
  }
}
