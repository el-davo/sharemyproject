import {Injectable} from '@angular/core';

@Injectable()
export class FeedbackActions {

  static DETERMINE_SHOW_FEEDBACK_BUTTON = 'feedback/DETERMINE_SHOW_FEEDBACK_BUTTON';

  static SHOW_FEEDBACK_HOVER_BUTTON = 'feedback/SHOW_FEEDBACK_HOVER_BUTTON';
  static HIDE_FEEDBACK_HOVER_BUTTON = 'feedback/HIDE_FEEDBACK_HOVER_BUTTON';

  static SHOW_FEEDBACK_MODAL = 'feedback/SHOW_FEEDBACK_MODAL';
  static HIDE_FEEDBACK_MODAL = 'feedback/HIDE_FEEDBACK_MODAL';

  static SEND_FEEDBACK = 'feedback/SEND_FEEDBACK';
  static SEND_FEEDBACK_SUCCESS = 'feedback/SEND_FEEDBACK_SUCCESS';
  static SEND_FEEDBACK_FAIL = 'feedback/SEND_FEEDBACK_FAIL';

  determineShowFeedbackButton() {
    return {type: FeedbackActions.DETERMINE_SHOW_FEEDBACK_BUTTON};
  }

  showFeedbackHoverButton() {
    return {type: FeedbackActions.SHOW_FEEDBACK_HOVER_BUTTON};
  }

  hideFeedbackHoverButton() {
    return {type: FeedbackActions.HIDE_FEEDBACK_HOVER_BUTTON};
  }

  showFeedbackModal() {
    return {type: FeedbackActions.SHOW_FEEDBACK_MODAL};
  }

  hideFeedabckModal() {
    return {type: FeedbackActions.HIDE_FEEDBACK_MODAL};
  }

  sendFeedback() {
    return {type: FeedbackActions.SEND_FEEDBACK};
  }

  sendFeedbackSuccess() {
    return {type: FeedbackActions.SEND_FEEDBACK_SUCCESS};
  }

  sendFeedbackFail() {
    return {type: FeedbackActions.SEND_FEEDBACK_FAIL};
  }
}
