import {Injectable} from '@angular/core';

@Injectable()
export class InitActions {

  static APP_INIT = 'login/APP_STARTUP';
  static APP_INIT_SUCCESS = 'login/APP_STARTUP_SUCCESS';
  static APP_INIT_FAIL = 'login/APP_STARTUP_FAIL';

  appInit() {
    return {type: InitActions.APP_INIT};
  }

  appInitSuccess() {
    return {type: InitActions.APP_INIT_SUCCESS};
  }

  appInitFail() {
    return {type: InitActions.APP_INIT_FAIL};
  }
}
