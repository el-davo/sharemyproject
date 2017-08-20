import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {FeedbackActions} from '../feedback.actions';
import {Observable} from 'rxjs/Observable';
import {FeedbackService} from '../feedback.service';
import {ToasterService} from 'angular2-toaster';

@Injectable()
export class FeedbackEpics {
  constructor(private toaster: ToasterService,
              private feedbackActions: FeedbackActions,
              private feedbackService: FeedbackService) {
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
          .mergeMap(projectList => {
            const message = 'Thanks for helping us to improve our user experience';
            this.toaster.pop('success', 'Success', message);

            return Observable.concat(
              Observable.of(this.feedbackActions.sendFeedbackSuccess()),
              Observable.of(this.feedbackActions.hideFeedabckModal()),
              Observable.of(this.feedbackActions.hideFeedbackHoverButton())
            )
          })
          .catch(err => {
            const message = 'It looks like some went wrong, please try again and we will look into the issue';
            this.toaster.pop('error', 'Error', message);
            return Observable.of(this.feedbackActions.sendFeedbackFail())
          });
      });
  };
}
