import {List} from '../lists/list.state';

export const searchState: SearchState = {
  isSearching: false,
  showSearchOverlay: false,
  results: []
};

export interface SearchState {
  isSearching: boolean;
  showSearchOverlay: boolean;
  results: List[]
}
