import {Component} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {LoginActions} from '../../login/login.actions';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private loginActions: LoginActions) {
  }

  @dispatch()
  showLoginModal(event) {
    event.preventDefault();
    return this.loginActions.showLoginModal();
  }

}
