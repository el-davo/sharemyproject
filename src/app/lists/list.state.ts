import {Link} from '../links/links.state';

export const listState: ListState = {
  isFetchingLists: false,
  isFetchingSelectedList: false,
  isAddingList: false,
  isDeletingList: false,
  showAddListModal: false,
  showDeleteListModal: false,
  addListForm: {
    id: null,
    name: '',
    isPrivate: false,
    description: ''
  },
  deletingList: null,
  selectedList: [],
  lists: []
};

export interface ListState {
  isFetchingLists: boolean;
  isFetchingSelectedList: boolean;
  isAddingList: boolean;
  isDeletingList: boolean;
  showAddListModal: boolean;
  showDeleteListModal: boolean;
  addListForm: List;
  deletingList: List;
  selectedList: Link[];
  lists: List[];
}

export interface List {
  id: string;
  name: string;
  isPrivate: boolean;
  description: string;
}
