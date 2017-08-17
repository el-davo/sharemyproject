import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FeedbackState} from '../feedback.state';
import {dispatch, select} from '@angular-redux/store';
import {FeedbackActions} from '../feedback.actions';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.css']
})
export class FeedbackModalComponent {

  @select('feedback') feedback$: Observable<FeedbackState>

  constructor(private feedbackActions: FeedbackActions) {
  }

  @dispatch()
  hideFeedbackModal() {
    return this.feedbackActions.hideFeedabckModal();
  }

  @dispatch()
  sendFeedback() {
    return this.feedbackActions.sendFeedback();
  }
}
