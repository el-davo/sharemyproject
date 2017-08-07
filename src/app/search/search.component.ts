import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {SearchActions} from './search.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @select(['search', 'showSearchOverlay']) showSearchOverlay$: Observable<boolean>;

  constructor(private searchActions: SearchActions) {
  }

  @dispatch()
  search(term: string) {
    return this.searchActions.search(term);
  }

}
