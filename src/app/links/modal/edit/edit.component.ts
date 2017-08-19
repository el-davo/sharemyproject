import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LinksState} from '../../links.state';
import {dispatch, select} from '@angular-redux/store';
import {LinksActions} from '../../links.actions';
import {isUrl} from '../../../common/utils';

@Component({
  selector: 'app-edit-link-modal',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  @select('links') links$: Observable<LinksState>;

  constructor(private linksActions: LinksActions) {
  }

  @dispatch()
  hideEditLinkModal() {
    return this.linksActions.hideEditLinkModal();
  }

  @dispatch()
  editLink() {
    return this.linksActions.editLink();
  }

  isUrl(url) {
    return isUrl(url);
  }
}
