import {Link} from '../links/links.state';
import {User} from '../navbar/navbar.state';

export const listState: ListState = {
  isFetchingLists: false,
  isFetchingSelectedList: false,
  isAddingList: false,
  isDeletingList: false,
  showAddListModal: false,
  showDeleteListModal: false,
  showAddLinkToListModal: false,
  addListForm: {
    name: '',
    isPrivate: true,
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
  publicLists: [],
  privateLists: []
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
  selectedList: ListsToLinks[];
  selectedListId: string;
  publicLists: List[];
  privateLists: List[];
}

export interface List {
  id?: string;
  name: string;
  isPrivate: boolean;
  description: string;
  user?: User;
}

interface ListsToLinks {
  id: string;
  linkId: string;
  listId: string;
  link: Link;
}
