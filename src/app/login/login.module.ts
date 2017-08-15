import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {LoginService} from './login.service';
import {LoginActions} from './login.actions';
import {LoginModalComponent} from './login-modal/login-modal.component';
import {ClrModalModule} from 'clarity-angular/modal/modal.module';
import {FacebookComponent} from './social-login-buttons/facebook/facebook.component';
import {GithubComponent} from './social-login-buttons/github/github.component';

@NgModule({
  imports: [
    CommonModule,
    ClrModalModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LoginModalComponent,
    FacebookComponent,
    GithubComponent
  ],
  exports: [
    LoginModalComponent
  ],
  providers: [
    LoginService,
    LoginActions
  ]
})
export class LoginModule {
}

