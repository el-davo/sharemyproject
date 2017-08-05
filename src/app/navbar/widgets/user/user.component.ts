import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {dispatch, select} from '@angular-redux/store';
import {SocialUser} from '../../../login/social/social-user.interface';
import {FacebookIdentity} from '../../../login/social/facebook.interface';
import {GithubIdentity} from '../../../login/social/github.interface';
import {LoginActions} from '../../../login/login.actions';

@Component({
  selector: 'app-nav-widget-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @select(['login', 'userData']) userData$: Observable<SocialUser<FacebookIdentity | GithubIdentity>>;

  constructor(private loginActions: LoginActions) {
  }

  @dispatch()
  logout() {
    return this.loginActions.logout();
  }
}
