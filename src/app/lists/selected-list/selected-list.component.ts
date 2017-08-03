import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListActions} from '../list.actions';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {ListState} from '../list.state';

@Component({
  selector: 'app-selected-list',
  templateUrl: './selected-list.component.html',
  styleUrls: ['./selected-list.component.css']
})
export class SelectedListComponent {

  @select('lists') lists$: Observable<ListState>;

  constructor(private route: ActivatedRoute, private listActions: ListActions) {
    this.route.params.subscribe(({id}) => this.fetchSelectedListLinks(id));
  }

  @dispatch()
  fetchSelectedListLinks(id) {
    return this.listActions.fetchSelectedListLinks(id)
  }

}
