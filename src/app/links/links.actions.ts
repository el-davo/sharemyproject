import {Injectable} from '@angular/core';
import {Link} from './links.state';

@Injectable()
export class LinksActions {

  static FETCH_LINKS = 'links/FETCH_LINKS';
  static FETCH_LINKS_SUCCESS = 'links/FETCH_LINKS_SUCCESS';
  static FETCH_LINKS_FAIL = 'links/FETCH_LINKS_FAIL';

  static SHOW_ADD_LINK_MODAL = 'links/SHOW_ADD_LINK_MODAL';
  static HIDE_ADD_LINK_MODAL = 'links/HIDE_ADD_LINK_MODAL';

  static ADD_LINK = 'links/ADD_LINK';
  static ADD_LINK_SUCCESS = 'links/ADD_LINK_SUCCESS';
  static ADD_LINK_FAIL = 'links/ADD_LINK_FAIL';

  static SHOW_DELETE_LINK_MODAL = 'links/SHOW_DELETE_LINK_MODAL';
  static HIDE_DELETE_LINK_MODAL = 'links/HIDE_DELETE_LINK_MODAL';

  static DELETE_LINK = 'links/DELETE_LINK';
  static DELETE_LINK_SUCCESS = 'links/DELETE_LINK_SUCCESS';
  static DELETE_LINK_FAIL = 'links/DELETE_LINK_FAIL';

  static SHOW_EDIT_LINK_MODAL = 'links/SHOW_EDIT_LINK_MODAL';
  static HIDE_EDIT_LINK_MODAL = 'links/HIDE_EDIT_LINK_MODAL';

  static EDIT_LINK = 'links/EDIT_LINK';
  static EDIT_LINK_SUCCESS = 'links/EDIT_LINK_SUCCESS';
  static EDIT_LINK_FAIL = 'links/EDIT_LINK_FAIL';

  fetchLinks() {
    return {type: LinksActions.FETCH_LINKS};
  }

  fetchLinksSuccess(links: Link[]) {
    return {type: LinksActions.FETCH_LINKS_SUCCESS, links};
  }

  fetchLinksFail() {
    return {type: LinksActions.FETCH_LINKS_FAIL};
  }

  showAddLinkModal() {
    return {type: LinksActions.SHOW_ADD_LINK_MODAL};
  }

  hideAddLinkModal() {
    return {type: LinksActions.HIDE_ADD_LINK_MODAL};
  }

  addLink() {
    return {type: LinksActions.ADD_LINK};
  }

  addLinkSuccess(link: Link) {
    return {type: LinksActions.ADD_LINK_SUCCESS, link};
  }

  addLinkFail() {
    return {type: LinksActions.ADD_LINK_FAIL};
  }

  showDeleteLinkModal(link: Link) {
    return {type: LinksActions.SHOW_DELETE_LINK_MODAL, link};
  }

  hideDeleteLinkModal() {
    return {type: LinksActions.HIDE_DELETE_LINK_MODAL};
  }

  deleteLink() {
    return {type: LinksActions.DELETE_LINK};
  }

  deleteLinkSuccess(link: Link) {
    return {type: LinksActions.DELETE_LINK_SUCCESS, link};
  }

  deleteLinkFail() {
    return {type: LinksActions.DELETE_LINK_FAIL};
  }

  showEditLinkModal(link: Link) {
    return {type: LinksActions.SHOW_EDIT_LINK_MODAL, link};
  }

  hideEditLinkModal() {
    return {type: LinksActions.HIDE_EDIT_LINK_MODAL};
  }

  editLink() {
    return {type: LinksActions.EDIT_LINK};
  }

  editLinkSuccess(link: Link) {
    return {type: LinksActions.EDIT_LINK_SUCCESS, link};
  }

  editLinkFail() {
    return {type: LinksActions.EDIT_LINK_FAIL};
  }
}
