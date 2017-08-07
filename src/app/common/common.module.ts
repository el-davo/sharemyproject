import {NgModule} from '@angular/core';
import {MdListComponent} from './material/md-list/md-list.component';
import {MdListItemComponent} from './material/md-list-item/md-list-item.component';

@NgModule({
  declarations: [
    MdListComponent,
    MdListItemComponent
  ],
  exports: [
    MdListComponent,
    MdListItemComponent
  ]
})
export class AppCommonModule {
}
