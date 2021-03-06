import {Component, OnInit} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {InitState} from './init/init.state';
import {LoginState} from './login/login.state';
import {InitActions} from './init/init.actions';
import {ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @select('init') init$: Observable<InitState>;
  @select('login') login$: Observable<LoginState>;

  public toasterconfig: ToasterConfig;

  constructor(private initActions: InitActions) {
    this.toasterconfig = new ToasterConfig({animation: 'fade', limit: 5});
  }

  @dispatch()
  ngOnInit() {
    return this.initActions.appInit();
  }
}
