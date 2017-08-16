import {Component, OnInit} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {LandingActions} from '../landing.actions';

@Component({
  selector: 'app-latest-lists',
  templateUrl: './latest-lists.component.html',
  styleUrls: ['./latest-lists.component.css']
})
export class LatestListsComponent implements OnInit {

  constructor(private landingActions: LandingActions) {
  }

  @dispatch()
  ngOnInit() {
    return this.landingActions.fetchLatestLists();
  }

}
