import {Injectable} from '@angular/core';
import {Link} from './links.state';

@Injectable()
export class LinksActions {

  static FETCH_LINKS = 'projects/FETCH_LINKS';
  static FETCH_LINKS_SUCCESS = 'projects/FETCH_LINKS_SUCCESS';
  static FETCH_LINKS_FAIL = 'projects/FETCH_LINKS_FAIL';

  static SHOW_ADD_LINK_MODAL = 'projects/SHOW_ADD_LINK_MODAL';
  static HIDE_ADD_LINK_MODAL = 'projects/HIDE_ADD_LINK_MODAL';

  static ADD_LINK = 'projects/ADD_LINK';
  static ADD_LINK_SUCCESS = 'projects/ADD_LINK_SUCCESS';
  static ADD_LINK_FAIL = 'projects/ADD_LINK_FAIL';

  static SHOW_DELETE_LINK_MODAL = 'projects/SHOW_DELETE_LINK_MODAL';
  static HIDE_DELETE_LINK_MODAL = 'projects/HIDE_DELETE_LINK_MODAL';

  static DELETE_LINK = 'projects/DELETE_LINK';
  static DELETE_LINK_SUCCESS = 'projects/DELETE_LINK_SUCCESS';
  static DELETE_LINK_FAIL = 'projects/DELETE_LINK_FAIL';

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
}
