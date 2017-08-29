import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TokensComponent} from './tokens.component';
import {ListComponent} from './list/list.component';
import {TokensActions} from './tokens.actions';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TokensComponent,
    ListComponent
  ],
  providers: [
    TokensActions
  ]
})
export class TokensModule {
}
