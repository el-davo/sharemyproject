import {Component} from '@angular/core';
import {LoginActions} from '../../login.actions';
import {dispatch} from '@angular-redux/store';

@Component({
  selector: 'app-social-login-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent {

  constructor(private loginActions: LoginActions) {
  }

  @dispatch()
  login() {
    return this.loginActions.loginFacebook();
  }

}
