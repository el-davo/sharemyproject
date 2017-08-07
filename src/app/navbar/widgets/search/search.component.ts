import {Component} from '@angular/core';
import {SearchActions} from '../../../search/search.actions';
import {dispatch} from '@angular-redux/store';

@Component({
  selector: 'app-nav-widget-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private searchActions: SearchActions) {
  }

  @dispatch()
  showSearchOverlay() {
    return this.searchActions.showSearchOverlay();
  }
}
