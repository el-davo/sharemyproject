import {Injectable} from '@angular/core';
import {S3Config} from './s3.state';

@Injectable()
export class S3Actions {

  static FETCH_S3_CONFIGS = 's3/FETCH_S3_CONFIGS';
  static FETCH_S3_CONFIGS_SUCCESS = 's3/FETCH_S3_CONFIGS_SUCCESS';
  static FETCH_S3_CONFIGS_FAIL = 's3/FETCH_S3_CONFIGS_FAIL';

  static SHOW_ADD_S3_WIZARD_MODAL = 's3/SHOW_ADD_S3_WIZARD_MODAL';
  static HIDE_ADD_S3_WIZARD_MODAL = 's3/HIDE_ADD_S3_WIZARD_MODAL';

  static VERIFY_S3_CONFIG = 's3/VERIFY_S3_CONFIG';
  static VERIFY_S3_CONFIG_SUCCESS = 's3/VERIFY_S3_CONFIG_SUCCESS';
  static VERIFY_S3_CONFIG_FAIL = 's3/VERIFY_S3_CONFIG_FAIL';

  static ADD_S3_CONFIG = 's3/ADD_S3_CONFIG';
  static ADD_S3_CONFIG_SUCCESS = 's3/ADD_S3_CONFIG_SUCCESS';
  static ADD_S3_CONFIG_FAIL = 's3/ADD_S3_CONFIG_FAIL';

  static SHOW_DELETE_S3_CONFIG_MODAL = 's3/SHOW_DELETE_S3_CONFIG_MODAL';
  static HIDE_DELETE_S3_CONFIG_MODAL = 's3/HIDE_DELETE_S3_CONFIG_MODAL';

  static DELETE_S3_CONFIG = 's3/DELETE_S3_CONFIG';
  static DELETE_S3_CONFG_SUCCESS = 's3/DELETE_S3_CONFG_SUCCESS';
  static DELETE_S3_CONFIG_FAIL = 's3/DELETE_S3_CONFIG_FAIL';

  fetchS3Configs = () => ({type: S3Actions.FETCH_S3_CONFIGS});

  fetchS3ConfigsSuccess = (s3Configs: S3Config[]) => ({type: S3Actions.FETCH_S3_CONFIGS_SUCCESS, s3Configs});

  fetchS3ConfigsFail = () => ({type: S3Actions.FETCH_S3_CONFIGS_FAIL});

  showAddS3WizardModal = () => ({type: S3Actions.SHOW_ADD_S3_WIZARD_MODAL});

  hideAddS3WizardModal = () => ({type: S3Actions.HIDE_ADD_S3_WIZARD_MODAL});

  veryS3Config = () => ({type: S3Actions.VERIFY_S3_CONFIG});

  verifyS3ConfigSuccess = () => ({type: S3Actions.VERIFY_S3_CONFIG_SUCCESS});

  verifyS3ConfigFail = () => ({type: S3Actions.VERIFY_S3_CONFIG_FAIL});

  addS3Config = () => ({type: S3Actions.ADD_S3_CONFIG});

  addS3ConfigSuccess = (s3Config: S3Config) => ({type: S3Actions.ADD_S3_CONFIG_SUCCESS, s3Config});

  addS3ConfigFail = () => ({type: S3Actions.ADD_S3_CONFIG_FAIL});

  showDeleteS3ConfigModal = (s3Config: S3Config) => ({type: S3Actions.SHOW_DELETE_S3_CONFIG_MODAL, s3Config});

  hideDeleteS3ConfigModal = () => ({type: S3Actions.HIDE_DELETE_S3_CONFIG_MODAL});

  deleteS3Config = () => ({type: S3Actions.DELETE_S3_CONFIG});

  deleteS3ConfigSuccess = (s3Config: S3Config) => ({type: S3Actions.DELETE_S3_CONFG_SUCCESS, s3Config});

  deleteS3ConfigFail = () => ({type: S3Actions.DELETE_S3_CONFIG_FAIL});
}
