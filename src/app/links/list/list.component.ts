import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {Link, LinksState} from '../links.state';
import {LinksActions} from '../links.actions';

@Component({
  selector: 'app-projects-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @select('links') links$: Observable<LinksState>;

  constructor(private projectsActions: LinksActions) {
  }

  @dispatch()
  showDeleteLinkModal(link: Link) {
    return this.projectsActions.showDeleteLinkModal(link);
  }

}
