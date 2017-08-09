import {List} from '../lists/list.state';
import {Link} from '../links/links.state';

export const searchState: SearchState = {
  isSearching: false,
  showSearchOverlay: false,
  isFetchingSelectedSearchList: false,
  results: {
    lists: []
  },
  selectedSearchList: []
};

export interface SearchState {
  isSearching: boolean;
  showSearchOverlay: boolean;
  isFetchingSelectedSearchList: boolean;
  results: SearchResults;
  selectedSearchList: ListsToLinks[]
}

export interface SearchResults {
  lists: List[]
}

interface ListsToLinks {
  id: string;
  linkId: string;
  listId: string;
  link: Link;
}
