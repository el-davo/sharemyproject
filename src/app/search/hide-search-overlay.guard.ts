import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {SearchActions} from './search.actions';
import {dispatch} from '@angular-redux/store';

@Injectable()
export class HideSearchOverlayGuard implements CanActivate {

  constructor(private searchActions: SearchActions) {

  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    this.hideSearchOverlay();
    return true;
  }

  @dispatch()
  hideSearchOverlay() {
    return this.searchActions.hideSearchOverlay();
  }
}
