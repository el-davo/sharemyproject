import {Link} from '../links/links.state';

export const listState: ListState = {
  isFetchingLists: false,
  isFetchingSelectedList: false,
  isAddingList: false,
  isDeletingList: false,
  showAddListModal: false,
  showDeleteListModal: false,
  showAddLinkToListModal: false,
  addListForm: {
    id: null,
    name: '',
    isPrivate: false,
    description: ''
  },
  addLinkToListForm: {
    id: null,
    name: '',
    url: null,
    isPrivate: false,
    description: ''
  },
  deletingList: null,
  selectedList: [],
  selectedListId: null,
  lists: []
};

export interface ListState {
  isFetchingLists: boolean;
  isFetchingSelectedList: boolean;
  isAddingList: boolean;
  isDeletingList: boolean;
  showAddListModal: boolean;
  showDeleteListModal: boolean;
  showAddLinkToListModal: boolean;
  addListForm: List;
  addLinkToListForm: Link;
  deletingList: List;
  selectedList: Link[];
  selectedListId: string;
  lists: List[];
}

export interface List {
  id: string;
  name: string;
  isPrivate: boolean;
  description: string;
}
