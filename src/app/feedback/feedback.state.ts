export const feedbackState: FeedbackState = {
  showFeedbackHoverButton: false,
  showFeedbackModal: false,
  isSendingFeedback: false,
  form: {
    summary: '',
    description: ''
  }
};

export interface FeedbackState {
  showFeedbackHoverButton: boolean;
  showFeedbackModal: boolean;
  isSendingFeedback: boolean;
  form: Form;
}

interface Form {
  summary: string;
  description: string;
}
