import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {FeedbackActions} from '../feedback.actions';
import {Observable} from 'rxjs/Observable';
import {FeedbackService} from '../feedback.service';

@Injectable()
export class FeedbackEpics {
  constructor(private feedbackActions: FeedbackActions, private feedbackService: FeedbackService) {
  }

  determineShowFeedbackButton = action$ => {
    return action$.ofType(FeedbackActions.DETERMINE_SHOW_FEEDBACK_BUTTON)
      .mergeMap(() => {
        return Observable.of(this.feedbackActions.showFeedbackHoverButton())
          .delay(3000);
      });
  };

  addFeedback = (action$, store) => {
    return action$.ofType(FeedbackActions.SEND_FEEDBACK)
      .mergeMap(() => {
        const {form} = store.getState().feedback;

        return this.feedbackService.addFeedback(form)
          .mergeMap(projectList => Observable.concat(
            Observable.of(this.feedbackActions.sendFeedbackSuccess()),
            Observable.of(this.feedbackActions.hideFeedabckModal()),
            Observable.of(this.feedbackActions.hideFeedbackHoverButton())
          ))
          .catch(err => Observable.of(this.feedbackActions.sendFeedbackFail()));
      });
  };
}
