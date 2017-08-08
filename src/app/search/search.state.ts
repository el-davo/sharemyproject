import {List} from '../lists/list.state';

export const searchState: SearchState = {
  isSearching: false,
  showSearchOverlay: false,
  results: {
    lists: []
  }
};

export interface SearchState {
  isSearching: boolean;
  showSearchOverlay: boolean;
  results: SearchResults;
}

export interface SearchResults {
  lists: List[]
}
