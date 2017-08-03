import {Injectable} from '@angular/core';
import {List} from './list.state';
import {Link} from '../links/links.state';

@Injectable()
export class ListActions {

  static FETCH_LISTS = 'list/FETCH_LISTS';
  static FETCH_LISTS_SUCCESS = 'list/FETCH_LISTS_SUCCESS';
  static FETCH_LISTS_FAIL = 'list/FETCH_LISTS_FAIL';

  static FETCH_SELECTED_LIST_LINKS = 'list/FETCH_SELECTED_LIST_LINKS';
  static FETCH_SELECTED_LIST_LINKS_SUCCESS = 'list/FETCH_SELECTED_LIST_LINKS_SUCCESS';
  static FETCH_SELECTED_LIST_LINKS_FAIL = 'list/FETCH_SELECTED_LIST_LINKS_FAIL';

  static SHOW_ADD_LIST_MODAL = 'list/SHOW_ADD_LIST_MODAL';
  static HIDE_ADD_LIST_MODAL = 'list/HIDE_ADD_LIST_MODAL';

  static ADD_LIST = 'list/ADD_LIST';
  static ADD_LIST_SUCCESS = 'list/ADD_LIST_SUCCESS';
  static ADD_LIST_FAIL = 'list/ADD_LIST_FAIL';

  static SHOW_DELETE_LIST_MODAL = 'list/SHOW_DELETE_LIST_MODAL';
  static HIDE_DELETE_LIST_MODAL = 'list/HIDE_DELETE_LIST_MODAL';

  static DELETE_LIST = 'list/DELETE_LIST';
  static DELETE_LIST_SUCCESS = 'list/DELETE_LIST_SUCCESS';
  static DELETE_LIST_FAIL = 'list/DELETE_LIST_FAIL';

  static SHOW_ADD_LINK_TO_LIST_MODAL = 'list/SHOW_ADD_LINK_TO_LIST_MODAL';
  static HIDE_ADD_LINK_TO_LIST_MODAL = 'list/HIDE_ADD_LINK_TO_LIST_MODAL';

  static ADD_LINK_TO_LIST = 'list/ADD_LINK_TO_LIST';
  static ADD_LINK_TO_LIST_SUCCESS = 'list/ADD_LINK_TO_LIST_SUCCESS';
  static ADD_LINK_TO_LIST_FAIL = 'list/ADD_LINK_TO_LIST_FAIL';

  fetchLists() {
    return {type: ListActions.FETCH_LISTS};
  }

  fetchListsSuccess(lists: List[]) {
    return {type: ListActions.FETCH_LISTS_SUCCESS, lists};
  }

  fetchListsFail() {
    return {type: ListActions.FETCH_LISTS_FAIL};
  }

  fetchSelectedListLinks(listId: string) {
    return {type: ListActions.FETCH_SELECTED_LIST_LINKS, listId};
  }

  fetchSelectedListLinkSuccess(links: Link[]) {
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

  addListSuccess(list: List) {
    return {type: ListActions.ADD_LIST_SUCCESS, list};
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

  deleteListSuccess(list: List) {
    return {type: ListActions.DELETE_LIST_SUCCESS, list};
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
