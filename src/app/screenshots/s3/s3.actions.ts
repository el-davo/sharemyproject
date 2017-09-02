import {Injectable} from '@angular/core';
import {S3Config} from './s3.state';

@Injectable()
export class S3Actions {

  static FETCH_S3_CONFIGS = 's3/FETCH_S3_CONFIGS';
  static FETCH_S3_CONFIGS_SUCCESS = 's3/FETCH_S3_CONFIGS_SUCCESS';
  static FETCH_S3_CONFIGS_FAIL = 's3/FETCH_S3_CONFIGS_FAIL';

  fetchS3Configs = () => ({type: S3Actions.FETCH_S3_CONFIGS});

  fetchS3ConfigsSuccess = (s3Config: S3Config) => ({type: S3Actions.FETCH_S3_CONFIGS_SUCCESS, s3Config});

  fetchS3ConfigsFail = () => ({type: S3Actions.FETCH_S3_CONFIGS_FAIL});
}
