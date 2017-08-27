import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ListActions} from '../list.actions';
import {ListsService} from '../list.service';
import {ToasterService} from 'angular2-toaster';

@Injectable()
export class ListEpics {
  constructor(private listsService: ListsService, private listActions: ListActions, private toaster: ToasterService) {
  }

  fetchList = (action$, store) => {
    return action$.ofType(ListActions.FETCH_LISTS)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;
        const {id} = store.getState().login.userData.user;

        return this.listsService.fetchUserLists(access_token, id)
          .mergeMap(lists => {
            return Observable.concat(
              Observable.of(this.listActions.updatePublicLists(lists.filter(list => !list.isPrivate))),
              Observable.of(this.listActions.updatePrivateLists(lists.filter(list => list.isPrivate))),
            )
          })
          .catch(err => Observable.of(this.listActions.fetchListsFail()));
      });
  };

  fetchSelectedListLinks = (action$, store) => {
    return action$.ofType(ListActions.FETCH_SELECTED_LIST_LINKS)
      .mergeMap(({listId}) => {
        return this.listsService.fetchSelectedListProject(listId)
          .map(projects => this.listActions.fetchSelectedListLinkSuccess(projects))
          .catch(err => Observable.of(this.listActions.fetchSelectedListLinksFail()));
      });
  };

  addList = (action$, store) => {
    return action$.ofType(ListActions.ADD_LIST)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;
        const {id} = store.getState().login.userData.user;
        const {addListForm} = store.getState().lists;

        return this.listsService.addProjectList(access_token, id, addListForm)
          .mergeMap(list => {
            const message = 'List has been added successfully';
            this.toaster.pop('success', 'Success', message);

            return Observable.concat(
              Observable.of(list.isPrivate ?
                this.listActions.addPrivateLIstSuccess(list) : this.listActions.addPublicListSuccess(list)),
              Observable.of(this.listActions.hideAddListModal())
            )
          })
          .catch(err => Observable.of(this.listActions.addListFail()));
      });
  };

  deleteList = (action$, store) => {
    return action$.ofType(ListActions.DELETE_LIST)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;
        const {deletingList} = store.getState().lists;

        return this.listsService.deleteProjectList(access_token, deletingList)
          .mergeMap(() => {
            const message = 'List has been deleted successfully';
            this.toaster.pop('success', 'Success', message);

            return Observable.concat(
              Observable.of(deletingList.isPrivate ?
                this.listActions.deletePrivateListSuccess(deletingList) :
                this.listActions.deletePublicListSuccess(deletingList)),
              Observable.of(this.listActions.hideDeleteListModal())
            )
          })
          .catch(err => Observable.of(this.listActions.deleteListFail()));
      });
  };

  addLinkToList = (action$, store) => {
    return action$.ofType(ListActions.ADD_LINK_TO_LIST)
      .mergeMap(() => {
        const {access_token} = store.getState().login.auth;
        const userId = store.getState().login.userData.user.id;
        const {id} = store.getState().lists.addLinkToListForm;
        const {selectedListId} = store.getState().lists;

        return this.listsService.addLinkToList(access_token, userId, selectedListId, id)
          .mergeMap(() => Observable.concat(
            Observable.of(this.listActions.addLinkToListSuccess()),
            Observable.of(this.listActions.fetchSelectedListLinks(selectedListId)),
            Observable.of(this.listActions.hideAddLinkToListModal())
          ))
          .catch(err => Observable.of(this.listActions.addLinkToListFail()));
      });
  }

}
