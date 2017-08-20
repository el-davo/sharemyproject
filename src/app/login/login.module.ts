import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {LoginService} from './login.service';
import {LoginActions} from './login.actions';
import {LoginModalComponent} from './login-modal/login-modal.component';
import {ClrModalModule} from 'clarity-angular/modal/modal.module';
import {FacebookComponent} from './social-login-buttons/facebook/facebook.component';
import {GithubComponent} from './social-login-buttons/github/github.component';
import {LogoutModalComponent} from './logout-modal/logout-modal.component';
import {ClrLoadingModule} from 'clarity-angular/utils/loading/loading.module'

@NgModule({
  imports: [
    CommonModule,
    ClrModalModule,
    ClrLoadingModule
  ],
  declarations: [
    LoginFormComponent,
    LoginModalComponent,
    FacebookComponent,
    GithubComponent,
    LogoutModalComponent
  ],
  exports: [
    LoginModalComponent,
    LogoutModalComponent
  ],
  providers: [
    LoginService,
    LoginActions
  ]
})
export class LoginModule {
}

