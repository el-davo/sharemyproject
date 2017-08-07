import {Component} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @select(['search', 'showSearchOverlay']) showSearchOverlay$: Observable<boolean>;

  constructor() {
  }

}
