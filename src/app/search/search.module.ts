import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClrIconModule} from 'clarity-angular/icon/icon.module';
import {SearchComponent} from './search.component';
import {SearchService} from '../search.service';
import {SearchActions} from './search.actions';
import {SearchCloseComponent} from './search-close/search-close.component';
import { ListsComponent } from './results/lists/lists.component';
import {AppCommonModule} from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    ClrIconModule,
    AppCommonModule
  ],
  declarations: [
    SearchComponent,
    SearchCloseComponent,
    ListsComponent
  ],
  providers: [
    SearchService,
    SearchActions
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule {
}
