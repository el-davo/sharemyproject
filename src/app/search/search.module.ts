import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClrIconModule} from 'clarity-angular/icon/icon.module';
import {SearchComponent} from './search.component';
import {SearchService} from './search.service';
import {SearchActions} from './search.actions';
import {SearchCloseComponent} from './search-close/search-close.component';
import {ListsComponent} from './results/lists/lists.component';
import {AppCommonModule} from '../common/common.module';
import {SearchSelectedListComponent} from './selected/search-selected-list/search-selected-list.component';
import {HideSearchOverlayGuard} from './hide-search-overlay.guard';

@NgModule({
  imports: [
    CommonModule,
    ClrIconModule,
    AppCommonModule,
    RouterModule
  ],
  declarations: [
    SearchComponent,
    SearchCloseComponent,
    ListsComponent,
    SearchSelectedListComponent
  ],
  providers: [
    SearchService,
    SearchActions,
    HideSearchOverlayGuard
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule {
}
