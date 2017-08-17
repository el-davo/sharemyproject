import {Component, OnInit} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {FeedbackActions} from '../feedback/feedback.actions';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  @select(['login', 'isLoggedIn']) isLoggedIn$: Observable<boolean>;

  constructor(private feedbackActions: FeedbackActions) {

  }

  @dispatch()
  ngOnInit() {
    return this.feedbackActions.determineShowFeedbackButton();
  }

}
