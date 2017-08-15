import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {LoginState} from '../login.state';
import {LoginActions} from '../login.actions';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {

  @select('login') login$: Observable<LoginState>;

  constructor(private loginActions: LoginActions) {
  }

  @dispatch()
  hideLoginModal() {
    return this.loginActions.hideLoginModal();
  }

}
