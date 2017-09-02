import {S3State, s3State} from './s3.state';
import {S3Actions} from './s3.actions';

export const s3Reducer = (state: S3State = s3State, action): S3State => {
  switch (action.type) {
    case S3Actions.FETCH_S3_CONFIGS:
      return {...state, isFetchingS3Configs: true};
    case S3Actions.FETCH_S3_CONFIGS_SUCCESS:
      return {...state, isFetchingS3Configs: false, s3Config: action.s3Config};
    case S3Actions.FETCH_S3_CONFIGS_FAIL:
      return {...state, isFetchingS3Configs: true};
    case S3Actions.SHOW_ADD_S3_WIZARD_MODAL:
      return {...state, showAddS3WizardModal: true};
    case S3Actions.HIDE_ADD_S3_WIZARD_MODAL:
      return {...state, showAddS3WizardModal: false};
    case S3Actions.VERIFY_S3_CONFIG:
      return {...state, isVerifyingS3Config: true, isS3VerificationSuccess: false};
    case S3Actions.VERIFY_S3_CONFIG_SUCCESS:
      return {...state, isVerifyingS3Config: false, isS3VerificationSuccess: true};
    case S3Actions.VERIFY_S3_CONFIG_FAIL:
      return {...state, isVerifyingS3Config: false, isS3VerificationSuccess: false};
    default:
      return state;
  }
};
