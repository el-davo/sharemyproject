import {Component} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {List} from '../../../lists/list.state';

@Component({
  selector: 'app-search-results-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {

  @select(['search', 'results', 'lists']) lists$: Observable<List[]>;

  constructor() {
  }

}
