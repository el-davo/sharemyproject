import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {dispatch, select} from '@angular-redux/store';
import {SearchActions} from '../../search.actions';
import {Observable} from 'rxjs/Observable';
import {SearchState} from '../../search.state';
import {FacebookIdentity} from '../../../login/social/facebook.interface';
import {GithubIdentity} from '../../../login/social/github.interface';

@Component({
  selector: 'app-search-selected-list',
  templateUrl: './search-selected-list.component.html',
  styleUrls: ['./search-selected-list.component.css']
})
export class SearchSelectedListComponent {

  @select('search') search$: Observable<SearchState>;
  @select(['search', 'selectedSearchList', 'userIdentity']) userIdentity$: Observable<FacebookIdentity | GithubIdentity>;

  constructor(private route: ActivatedRoute, private searchActions: SearchActions) {
    this.route.params.subscribe(({id}) => this.fetchLinks(id));
  }

  @dispatch()
  fetchLinks(id: string) {
    return this.searchActions.fetchSelectedSearchList(id);
  }
}
