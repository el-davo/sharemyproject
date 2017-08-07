import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {SearchService} from '../search.service';
import {SearchActions} from './search.actions';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchComponent
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
