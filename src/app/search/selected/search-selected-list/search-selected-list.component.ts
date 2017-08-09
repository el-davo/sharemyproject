import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {dispatch, select} from '@angular-redux/store';
import {SearchActions} from '../../search.actions';
import {Observable} from 'rxjs/Observable';
import {SearchState} from '../../search.state';

@Component({
  selector: 'app-search-selected-list',
  templateUrl: './search-selected-list.component.html',
  styleUrls: ['./search-selected-list.component.css']
})
export class SearchSelectedListComponent {

  @select('search') search$: Observable<SearchState>;

  constructor(private route: ActivatedRoute, private searchActions: SearchActions) {
    this.route.params.subscribe(({id}) => this.fetchLinks(id));
  }

  @dispatch()
  fetchLinks(id: string) {
    return this.searchActions.fetchSelectedSearchList(id);
  }
}
