import {Component} from '@angular/core';
import {LoginActions} from '../../login.actions';
import {dispatch} from '@angular-redux/store';

@Component({
  selector: 'app-social-login-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent {

  constructor(private loginActions: LoginActions) {
  }

  @dispatch()
  login() {
    return this.loginActions.loginGithub();
  }
}
