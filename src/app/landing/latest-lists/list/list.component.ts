import {Component} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {LandingState} from '../../landing.state';

@Component({
  selector: 'app-latest-list-items',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @select('landing') landing$: Observable<LandingState>;

  constructor() {
  }

}
