import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TokensComponent} from './tokens.component';
import {ListComponent} from './list/list.component';
import {TokensActions} from './tokens.actions';
import { EmptyComponent } from './list/empty/empty.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TokensComponent,
    ListComponent,
    EmptyComponent
  ],
  providers: [
    TokensActions
  ]
})
export class TokensModule {
}
