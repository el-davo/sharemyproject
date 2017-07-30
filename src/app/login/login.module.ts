import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {LoginService} from './login.service';
import {LoginActions} from './login.actions';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService,
    LoginActions
  ]
})
export class LoginModule {
}

