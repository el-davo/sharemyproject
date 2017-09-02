import {Injectable} from '@angular/core';
import {S3Config} from './s3.state';

@Injectable()
export class S3Actions {

  static FETCH_S3_CONFIGS = 's3/FETCH_S3_CONFIGS';
  static FETCH_S3_CONFIGS_SUCCESS = 's3/FETCH_S3_CONFIGS_SUCCESS';
  static FETCH_S3_CONFIGS_FAIL = 's3/FETCH_S3_CONFIGS_FAIL';

  static SHOW_ADD_S3_WIZARD_MODAL = 's3/SHOW_ADD_S3_WIZARD_MODAL';
  static HIDE_ADD_S3_WIZARD_MODAL = 's3/HIDE_ADD_S3_WIZARD_MODAL';

  fetchS3Configs = () => ({type: S3Actions.FETCH_S3_CONFIGS});

  fetchS3ConfigsSuccess = (s3Config: S3Config) => ({type: S3Actions.FETCH_S3_CONFIGS_SUCCESS, s3Config});

  fetchS3ConfigsFail = () => ({type: S3Actions.FETCH_S3_CONFIGS_FAIL});

  showAddS3WizardModal = () => ({type: S3Actions.SHOW_ADD_S3_WIZARD_MODAL});

  hideAddS3WizardModal = () => ({type: S3Actions.HIDE_ADD_S3_WIZARD_MODAL});
}
