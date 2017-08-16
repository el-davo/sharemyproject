import {List} from '../lists/list.state';

export const landingState: LandingState = {
  isFetchingLatestLists: true,
  lists: []
};

export interface LandingState {
  isFetchingLatestLists: boolean;
  lists: List[]
}
