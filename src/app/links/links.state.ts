import {User} from '../navbar/navbar.state';

export const linksState: LinksState = {
  isFetchingLinks: false,
  showAddLinkModal: false,
  showDeleteLinkModal: false,
  isAddingLink: false,
  isDeletingLink: false,
  deletingLink: null,
  addLinkForm: {
    name: '',
    isPrivate: true,
    description: '',
    url: ''
  },
  links: []
};

export interface LinksState {
  isFetchingLinks: boolean;
  showAddLinkModal: boolean;
  showDeleteLinkModal: boolean;
  isAddingLink: boolean;
  isDeletingLink: boolean;
  deletingLink: Link;
  addLinkForm: Link;
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
