import {Component, OnInit} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {ListActions} from './list.actions';
import {Observable} from 'rxjs/Observable';
import {List, ListState} from './list.state';
import {Angulartics2GoogleAnalytics} from 'angulartics2';

@Component({
  selector: 'app-project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @select('lists') lists$: Observable<ListState>;

  constructor(private projectListActions: ListActions, angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
  }

  @dispatch()
  ngOnInit() {
    return this.projectListActions.fetchLists();
  }

  @dispatch()
  deleteList($event, list: List) {
    $event.stopPropagation();
    return this.projectListActions.showDeleteListModal(list);
  }

}
