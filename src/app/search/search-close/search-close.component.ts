import {Component} from '@angular/core';
import {SearchActions} from '../search.actions';
import {dispatch} from '@angular-redux/store';

@Component({
  selector: 'app-search-close',
  templateUrl: './search-close.component.html',
  styleUrls: ['./search-close.component.css']
})
export class SearchCloseComponent {

  constructor(private searchActions: SearchActions) {
  }

  @dispatch()
  hideSearchOverlay() {
    return this.searchActions.hideSearchOverlay();
  }

}
