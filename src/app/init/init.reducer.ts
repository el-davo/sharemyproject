import {InitState, initState} from './init.state';
import {InitActions} from './init.actions';

export const initReducer = (state: InitState = initState, action): InitState => {
  switch (action.type) {
    case InitActions.APP_INIT:
      return {...state, isInitializingApp: true};
    case InitActions.APP_INIT_SUCCESS:
      return {...state, isInitializingApp: false};
    case InitActions.APP_INIT_FAIL:
      return {...state, isInitializingApp: false, hasInitFailed: true};
    default:
      return state;
  }
};
