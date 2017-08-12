import {NgModule} from '@angular/core';
import {MdListComponent} from './material/md-list/md-list.component';
import {MdListItemComponent} from './material/md-list-item/md-list-item.component';
import {MdListRightIconButtonComponent} from './material/md-list-right-icon-button/md-list-right-icon-button.component';
import {UserService} from './user.service';

@NgModule({
  declarations: [
    MdListComponent,
    MdListItemComponent,
    MdListRightIconButtonComponent
  ],
  exports: [
    MdListComponent,
    MdListItemComponent,
    MdListRightIconButtonComponent
  ],
  providers: [
    UserService
  ]
})
export class AppCommonModule {
}
