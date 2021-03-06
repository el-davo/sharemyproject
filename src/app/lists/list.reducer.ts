import {listState, ListState} from './list.state';
import {ListActions} from './list.actions';

export const listsReducer = (state: ListState = listState, action): ListState => {
  switch (action.type) {
    case ListActions.FETCH_LISTS:
      return {...state, isFetchingLists: true};
    case ListActions.UPDATE_PUBLIC_LISTS:
      return {...state, isFetchingLists: false, publicLists: action.lists};
    case ListActions.UPDATE_PRIVATE_LISTS:
      return {...state, isFetchingLists: false, privateLists: action.lists};
    case ListActions.FETCH_LISTS_FAIL:
      return {...state, isFetchingLists: false};
    case ListActions.FETCH_SELECTED_LIST_LINKS:
      return {...state, isFetchingSelectedList: true, selectedListId: action.listId};
    case ListActions.FETCH_SELECTED_LIST_LINKS_SUCCESS:
      return {...state, isFetchingSelectedList: false, selectedList: action.links};
    case ListActions.FETCH_SELECTED_LIST_LINKS_FAIL:
      return {...state, isFetchingSelectedList: false};
    case ListActions.SHOW_ADD_LIST_MODAL:
      return {...state, showAddListModal: true};
    case ListActions.HIDE_ADD_LIST_MODAL:
      return {...state, showAddListModal: false, addListForm: {name: '', description: '', isPrivate: true}};
    case ListActions.ADD_LIST:
      return {...state, isAddingList: true};
    case ListActions.ADD_PUBLIC_LIST_SUCCESS:
      return {...state, isAddingList: false, publicLists: [...state.publicLists, action.list]};
    case ListActions.ADD_PRIVATE_LIST_SUCCESS:
      return {...state, isAddingList: false, privateLists: [...state.privateLists, action.list]};
    case ListActions.ADD_LIST_FAIL:
      return {...state, isAddingList: false};
    case ListActions.SHOW_DELETE_LIST_MODAL:
      return {...state, showDeleteListModal: true, deletingList: action.list};
    case ListActions.HIDE_DELETE_LIST_MODAL:
      return {...state, showDeleteListModal: false, deletingList: null};
    case ListActions.DELETE_LIST:
      return {...state, isDeletingList: true};
    case ListActions.DELETE_PUBLIC_LIST_SUCCESS:
      return {
        ...state, isDeletingList: false, publicLists: state.publicLists.filter(list => {
          return list.id !== action.list.id
        })
      };
    case ListActions.DELETE_PRIVATE_LIST_SUCCESS:
      return {
        ...state, isDeletingList: false, privateLists: state.privateLists.filter(list => {
          return list.id !== action.list.id
        })
      };
    case ListActions.DELETE_LIST_FAIL:
      return {...state, isDeletingList: false};
    case ListActions.SHOW_ADD_LINK_TO_LIST_MODAL:
      return {...state, showAddLinkToListModal: true};
    case ListActions.HIDE_ADD_LINK_TO_LIST_MODAL:
      return {...state, showAddLinkToListModal: false};
    default:
      return state;
  }
};
