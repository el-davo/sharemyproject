import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {LinksState} from '../../links.state';
import {LinksActions} from '../../links.actions';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-link-modal.component.html',
  styleUrls: ['./add-link-modal.component.css']
})
export class AddLinkModalComponent {

  @select('links') links$: Observable<LinksState>;

  constructor(private projectsActions: LinksActions) { }

  @dispatch()
  hideAddLinkModal() {
    return this.projectsActions.hideAddLinkModal();
  }

  @dispatch()
  addLink() {
    return this.projectsActions.addLink();
  }
}
