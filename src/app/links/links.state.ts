import {User} from '../navbar/navbar.state';

export const linksState: LinksState = {
  isFetchingLinks: false,
  showAddLinkModal: false,
  showDeleteLinkModal: false,
  showEditLinkModal: false,
  isAddingLink: false,
  isDeletingLink: false,
  deletingLink: null,
  addLinkForm: {
    name: '',
    isPrivate: true,
    description: '',
    url: ''
  },
  editLinkForm: {
    id: '',
    name: '',
    description: '',
    url: '',
    isPrivate: true
  },
  links: []
};

export interface LinksState {
  isFetchingLinks: boolean;
  showAddLinkModal: boolean;
  showDeleteLinkModal: boolean;
  showEditLinkModal: boolean;
  isAddingLink: boolean;
  isDeletingLink: boolean;
  deletingLink: Link;
  addLinkForm: Link;
  editLinkForm: Link,
  links: Link[];
}

export interface Link {
  id?: string;
  user?: User;
  name: string;
  isPrivate: boolean;
  description: string;
  url: string;
}
