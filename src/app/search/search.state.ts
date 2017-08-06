import {List} from '../lists/list.state';

export const searchState: SearchState = {
  isSearching: false,
  results: []
};

export interface SearchState {
  isSearching: boolean;
  results: List[]
}
