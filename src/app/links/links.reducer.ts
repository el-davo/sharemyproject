import {LinksActions} from './links.actions';
import {LinksState, linksState} from './links.state';

export const linksReducer = (state: LinksState = linksState, action): LinksState => {
  switch (action.type) {
    case LinksActions.FETCH_LINKS:
      return {...state, isFetchingLinks: true};
    case LinksActions.FETCH_LINKS_SUCCESS:
      return {...state, isFetchingLinks: false, links: action.links};
    case LinksActions.FETCH_LINKS_FAIL:
      return {...state, isFetchingLinks: false};
    case LinksActions.SHOW_ADD_LINK_MODAL:
      return {...state, showAddLinkModal: true};
    case LinksActions.HIDE_ADD_LINK_MODAL:
      return {...state, showAddLinkModal: false, addLinkForm: {name: '', url: '', description: '', isPrivate: true}};
    case LinksActions.ADD_LINK:
      return {...state, isAddingLink: true};
    case LinksActions.ADD_LINK_SUCCESS:
      return {...state, isAddingLink: false, links: [...state.links, action.link]};
    case LinksActions.ADD_LINK_FAIL:
      return {...state, isAddingLink: false};
    case LinksActions.SHOW_DELETE_LINK_MODAL:
      return {...state, showDeleteLinkModal: true, deletingLink: action.link};
    case LinksActions.HIDE_DELETE_LINK_MODAL:
      return {...state, showDeleteLinkModal: false, deletingLink: null};
    case LinksActions.DELETE_LINK:
      return {...state, isDeletingLink: true};
    case LinksActions.DELETE_LINK_SUCCESS:
      return {
        ...state, isDeletingLink: false, links: state.links.filter(link => {
          return link.id !== action.link.id
        })
      };
    case LinksActions.DELETE_LINK_FAIL:
      return {...state, isDeletingLink: false};
    case LinksActions.SHOW_EDIT_LINK_MODAL:
      return {...state, showEditLinkModal: true, editLinkForm: action.link};
    case LinksActions.HIDE_EDIT_LINK_MODAL:
      return {
        ...state,
        showEditLinkModal: false,
        editLinkForm: {id: '', name: '', url: '', description: '', isPrivate: true}
      };
    case LinksActions.EDIT_LINK_SUCCESS:
      return {
        ...state, links: state.links.map(link => {
          return link.id === action.link.id ? action.link : link;
        })
      };
    default:
      return state;
  }
};
