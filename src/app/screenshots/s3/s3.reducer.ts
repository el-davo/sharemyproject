import {S3State, s3State} from './s3.state';
import {S3Actions} from './s3.actions';

export const s3Reducer = (state: S3State = s3State, action): S3State => {
  switch (action.type) {
    case S3Actions.FETCH_S3_CONFIGS:
      return {...state, isFetchingS3Configs: true};
    case S3Actions.FETCH_S3_CONFIGS_SUCCESS:
      return {...state, isFetchingS3Configs: false, s3Configs: action.s3Configs};
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
    case S3Actions.ADD_S3_CONFIG:
      return {...state, isAddingS3Config: true};
    case S3Actions.ADD_S3_CONFIG_SUCCESS:
      return {...state, isAddingS3Config: false, s3Configs: [...state.s3Configs, action.s3Config]};
    case S3Actions.ADD_S3_CONFIG_FAIL:
      return {...state, isAddingS3Config: false};
    case S3Actions.SHOW_DELETE_S3_CONFIG_MODAL:
      return {...state, showDeleteS3ConfigModal: true, deletingS3Config: action.s3Config};
    case S3Actions.HIDE_DELETE_S3_CONFIG_MODAL:
      return {...state, showDeleteS3ConfigModal: false};
    case S3Actions.DELETE_S3_CONFIG:
      return {...state, isDeletingS3Config: true};
    case S3Actions.DELETE_S3_CONFG_SUCCESS:
      return {
        ...state,
        isDeletingS3Config: false,
        s3Configs: state.s3Configs.filter(s3Config => s3Config.id !== action.s3Config.id)
      };
    case S3Actions.DELETE_S3_CONFIG_FAIL:
      return {...state, isDeletingS3Config: false};
    default:
      return state;
  }
};
