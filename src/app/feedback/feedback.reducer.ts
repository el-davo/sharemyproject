import {FeedbackState, feedbackState} from './feedback.state';
import {FeedbackActions} from './feedback.actions';

export const feedbackReducer = (state: FeedbackState = feedbackState, action: any): FeedbackState => {
  switch (action.type) {
    case FeedbackActions.SHOW_FEEDBACK_HOVER_BUTTON:
      return {...state, showFeedbackHoverButton: true};
    case FeedbackActions.HIDE_FEEDBACK_HOVER_BUTTON:
      return {...state, showFeedbackHoverButton: false};
    case FeedbackActions.SHOW_FEEDBACK_MODAL:
      return {...state, showFeedbackModal: true};
    case FeedbackActions.HIDE_FEEDBACK_MODAL:
      return {...state, showFeedbackModal: false};
    case FeedbackActions.SEND_FEEDBACK:
      return {...state, isSendingFeedback: true};
    case FeedbackActions.SEND_FEEDBACK_SUCCESS:
      return {...state, isSendingFeedback: false};
    case FeedbackActions.SEND_FEEDBACK_FAIL:
      return {...state, isSendingFeedback: false};
    default:
      return state;
  }
};
