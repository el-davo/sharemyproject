import {Component} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {LoginState} from '../login/login.state';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent {

  @select('login') login$: Observable<LoginState>;

  constructor() { }

}
