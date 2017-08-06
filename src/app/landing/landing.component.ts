import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  @select(['login', 'isLoggedIn']) isLoggedIn$: Observable<boolean>;

  constructor() {
  }

  ngOnInit() {
  }

}
