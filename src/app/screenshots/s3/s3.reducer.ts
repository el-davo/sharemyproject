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
    default:
      return state;
  }
};
