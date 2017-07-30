import { Component, OnInit } from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {LoginState} from '../login.state';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @select('login') login$: Observable<LoginState>;

  constructor() { }

  ngOnInit() {
  }

}
