import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {LoginActions} from '../login.actions';
import {LoginState} from '../login.state';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.css']
})
export class LogoutModalComponent {

  @select('login') login$: Observable<LoginState>;

  constructor(private loginActions: LoginActions) {
  }

  @dispatch()
  logout() {
    return this.loginActions.logout();
  }

  @dispatch()
  hideLogoutModal() {
    return this.loginActions.hideLogoutModal();
  }
}
