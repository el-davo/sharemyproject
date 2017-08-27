import {Injectable} from '@angular/core';
import {List} from './list.state';
import {ListsToLinks} from '../search/search.state';

@Injectable()
export class ListActions {

  static FETCH_LISTS = 'list/FETCH_LISTS';
  static UPDATE_PUBLIC_LISTS = 'list/UPDATE_PUBLIC_LISTS';
  static UPDATE_PRIVATE_LISTS = 'list/UPDATE_PRIVATE_LISTS';
  static FETCH_LISTS_FAIL = 'list/FETCH_LISTS_FAIL';

  static FETCH_SELECTED_LIST_LINKS = 'list/FETCH_SELECTED_LIST_LINKS';
  static FETCH_SELECTED_LIST_LINKS_SUCCESS = 'list/FETCH_SELECTED_LIST_LINKS_SUCCESS';
  static FETCH_SELECTED_LIST_LINKS_FAIL = 'list/FETCH_SELECTED_LIST_LINKS_FAIL';

  static SHOW_ADD_LIST_MODAL = 'list/SHOW_ADD_LIST_MODAL';
  static HIDE_ADD_LIST_MODAL = 'list/HIDE_ADD_LIST_MODAL';

  static ADD_LIST = 'list/ADD_LIST';
  static ADD_PUBLIC_LIST_SUCCESS = 'list/ADD_PUBLIC_LIST_SUCCESS';
  static ADD_PRIVATE_LIST_SUCCESS = 'list/ADD_PRIVATE_LIST_SUCCESS';
  static ADD_LIST_FAIL = 'list/ADD_LIST_FAIL';

  static SHOW_DELETE_LIST_MODAL = 'list/SHOW_DELETE_LIST_MODAL';
  static HIDE_DELETE_LIST_MODAL = 'list/HIDE_DELETE_LIST_MODAL';

  static DELETE_LIST = 'list/DELETE_LIST';
  static DELETE_PUBLIC_LIST_SUCCESS = 'list/DELETE_PUBLIC_LIST_SUCCESS';
  static DELETE_PRIVATE_LIST_SUCCESS = 'list/DELETE_PRIVATE_LIST_SUCCESS';
  static DELETE_LIST_FAIL = 'list/DELETE_LIST_FAIL';

  static SHOW_ADD_LINK_TO_LIST_MODAL = 'list/SHOW_ADD_LINK_TO_LIST_MODAL';
  static HIDE_ADD_LINK_TO_LIST_MODAL = 'list/HIDE_ADD_LINK_TO_LIST_MODAL';

  static ADD_LINK_TO_LIST = 'list/ADD_LINK_TO_LIST';
  static ADD_LINK_TO_LIST_SUCCESS = 'list/ADD_LINK_TO_LIST_SUCCESS';
  static ADD_LINK_TO_LIST_FAIL = 'list/ADD_LINK_TO_LIST_FAIL';

  fetchLists() {
    return {type: ListActions.FETCH_LISTS};
  }

  updatePublicLists(lists: List[]) {
    return {type: ListActions.UPDATE_PUBLIC_LISTS, lists};
  }

  updatePrivateLists(lists: List[]) {
    return {type: ListActions.UPDATE_PRIVATE_LISTS, lists};
  }

  fetchListsFail() {
    return {type: ListActions.FETCH_LISTS_FAIL};
  }

  fetchSelectedListLinks(listId: string) {
    return {type: ListActions.FETCH_SELECTED_LIST_LINKS, listId};
  }

  fetchSelectedListLinkSuccess(links: ListsToLinks[]) {
    return {type: ListActions.FETCH_SELECTED_LIST_LINKS_SUCCESS, links};
  }

  fetchSelectedListLinksFail() {
    return {type: ListActions.FETCH_SELECTED_LIST_LINKS_FAIL};
  }

  showAddListModal() {
    return {type: ListActions.SHOW_ADD_LIST_MODAL};
  }

  hideAddListModal() {
    return {type: ListActions.HIDE_ADD_LIST_MODAL};
  }

  addList() {
    return {type: ListActions.ADD_LIST};
  }

  addPublicListSuccess(list: List) {
    return {type: ListActions.ADD_PUBLIC_LIST_SUCCESS, list};
  }

  addPrivateLIstSuccess(list: List) {
    return {type: ListActions.ADD_PRIVATE_LIST_SUCCESS, list};
  }

  addListFail() {
    return {type: ListActions.ADD_LIST_FAIL};
  }

  showDeleteListModal(list: List) {
    return {type: ListActions.SHOW_DELETE_LIST_MODAL, list};
  }

  hideDeleteListModal() {
    return {type: ListActions.HIDE_DELETE_LIST_MODAL};
  }

  deleteList() {
    return {type: ListActions.DELETE_LIST};
  }

  deletePublicListSuccess(list: List) {
    return {type: ListActions.DELETE_PUBLIC_LIST_SUCCESS, list};
  }

  deletePrivateListSuccess(list: List) {
    return {type: ListActions.DELETE_PRIVATE_LIST_SUCCESS, list};
  }

  deleteListFail() {
    return {type: ListActions.DELETE_LIST_FAIL};
  }

  showAddLinkToListModal() {
    return {type: ListActions.SHOW_ADD_LINK_TO_LIST_MODAL};
  }

  hideAddLinkToListModal() {
    return {type: ListActions.HIDE_ADD_LINK_TO_LIST_MODAL};
  }

  addLinkToList() {
    return {type: ListActions.ADD_LINK_TO_LIST};
  }

  addLinkToListSuccess() {
    return {type: ListActions.ADD_LINK_TO_LIST_SUCCESS};
  }

  addLinkToListFail() {
    return {type: ListActions.ADD_LINK_TO_LIST_FAIL};
  }
}
