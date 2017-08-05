import 'rxjs/add/operator/mergeMap';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {select} from '@angular-redux/store';

@Injectable()
export class IsLoggedInGuard implements CanActivate {

  @select(['login', 'isLoggedIn']) isLoggedIn$: Observable<boolean>;

  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isLoggedIn$.mergeMap(isLoggedIn => {
      if (!isLoggedIn) {
        this.router.navigate(['/login']);
        return Observable.of(false);
      }

      return Observable.of(true);
    });
  }
}
