import {Component} from '@angular/core';
import {FeedbackActions} from '../feedback.actions';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-feedback-hover-button',
  templateUrl: './hover-button.component.html',
  styleUrls: ['./hover-button.component.css']
})
export class HoverButtonComponent {

  @select(['feedback', 'showFeedbackHoverButton']) showFeedbackHoverButton$: Observable<boolean>;

  constructor(private feedbackAction: FeedbackActions) {
  }

  @dispatch()
  showFeedbackModal() {
    return this.feedbackAction.showFeedbackModal();
  }
}
