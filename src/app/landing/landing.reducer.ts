import {LandingState, landingState} from './landing.state';
import {LandingActions} from './landing.actions';

export const landingReducer = (state: LandingState = landingState, action): LandingState => {
  switch (action.type) {
    case LandingActions.FETCH_LATEST_LISTS:
      return {...state, isFetchingLatestLists: true};
    case LandingActions.FETCH_LATEST_LISTS_SUCCESS:
      return {...state, isFetchingLatestLists: false, lists: action.lists};
    case LandingActions.FETCH_LATEST_LISTS_FAIL:
      return {...state, isFetchingLatestLists: false};
    default:
      return state;
  }
};
