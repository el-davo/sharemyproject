import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LinksService} from '../links.service';
import {LinksActions} from '../links.actions';

@Injectable()
export class LinksEpics {
  constructor(private linksService: LinksService, private linksActions: LinksActions) {
  }

  fetchLinks = (action$, store) => {
    return action$.ofType(LinksActions.FETCH_LINKS)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;
        const {id} = store.getState().login.userData.user;

        return this.linksService.fetchProjects(access_token, id)
          .map(links => this.linksActions.fetchLinksSuccess(links))
          .catch(err => Observable.of(this.linksActions.fetchLinksFail()));
      });
  };

  addLink = (action$, store) => {
    return action$.ofType(LinksActions.ADD_LINK)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;
        const {id} = store.getState().login.userData.user;
        const addLinkForm = store.getState().links.addLinkForm;

        return this.linksService.addProject(access_token, id, addLinkForm)
          .mergeMap(link => Observable.concat(
            Observable.of(this.linksActions.addLinkSuccess(link)),
            Observable.of(this.linksActions.hideAddLinkModal())
          ))
          .catch(err => Observable.of(this.linksActions.addLinkFail()));
      });
  };

  deleteLink = (action$, store) => {
    return action$.ofType(LinksActions.DELETE_LINK)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;
        const {deletingLink} = store.getState().links;

        return this.linksService.deleteProject(access_token, deletingLink)
          .mergeMap(() => Observable.concat(
            Observable.of(this.linksActions.deleteLinkSuccess(deletingLink)),
            Observable.of(this.linksActions.hideDeleteLinkModal())
          ))
          .catch(err => Observable.of(this.linksActions.deleteLinkFail()));
      });
  };
}
