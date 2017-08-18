import {Component, OnInit} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {FeedbackActions} from '../feedback/feedback.actions';
import {Angulartics2GoogleAnalytics} from 'angulartics2';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  @select(['login', 'isLoggedIn']) isLoggedIn$: Observable<boolean>;

  constructor(private feedbackActions: FeedbackActions, angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {

  }

  @dispatch()
  ngOnInit() {
    return this.feedbackActions.determineShowFeedbackButton();
  }

}
