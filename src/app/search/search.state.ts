import {List} from '../lists/list.state';
import {Link} from '../links/links.state';
import {Identity} from '../login/social/social-user.interface';

export const searchState: SearchState = {
  isSearching: false,
  showSearchOverlay: false,
  isFetchingSelectedSearchList: false,
  results: {
    lists: []
  },
  selectedSearchList: {
    userIdentity: null,
    list: []
  }
};

export interface SearchState {
  isSearching: boolean;
  showSearchOverlay: boolean;
  isFetchingSelectedSearchList: boolean;
  results: SearchResults;
  selectedSearchList: SelectedSearchList
}

export interface SearchResults {
  lists: List[]
}

export interface ListsToLinks {
  id: string;
  linkId: string;
  listId: string;
  link: Link;
}

export interface SelectedSearchList {
  userIdentity: Identity;
  list: ListsToLinks[]
}
