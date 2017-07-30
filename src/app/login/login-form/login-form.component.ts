import { Component, OnInit } from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {LoginState} from '../login.state';
import {LoginActions} from '../login.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @select('login') login$: Observable<LoginState>;

  constructor(private loginActions: LoginActions) { }

  @dispatch()
  loginFacebook() {
    return this.loginActions.loginFacebook();
  }

}
