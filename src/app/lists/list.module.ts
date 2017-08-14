import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {ListsService} from './list.service';
import {ListActions} from './list.actions';
import {RouterModule} from '@angular/router';
import {ClrIconModule} from 'clarity-angular/icon/icon.module';
import {ClrModalModule} from 'clarity-angular/modal/modal.module';
import {NgReduxFormModule} from '@angular-redux/form/dist/source';
import {ClrLoadingModule} from 'clarity-angular/utils/loading/loading.module'
import {FormsModule} from '@angular/forms';
import {SelectedListComponent} from './selected-list/selected-list.component';
import {CardComponent} from './card/card.component';
import {AddListModalComponent} from './modal/add/add-list-modal.component';
import {DeleteListModalComponent} from './modal/delete/delete-list-modal.component';
import {AddLinkModalComponent} from './modal/add-link/add-link-modal.component';
import {AppCommonModule} from '../common/common.module';
import { EmptyComponent } from './selected-list/empty/empty.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClrIconModule,
    ClrModalModule,
    NgReduxFormModule,
    ClrLoadingModule,
    FormsModule,
    AppCommonModule
  ],
  declarations: [
    ListComponent,
    SelectedListComponent,
    CardComponent,
    AddListModalComponent,
    DeleteListModalComponent,
    AddLinkModalComponent,
    EmptyComponent
  ],
  providers: [
    ListsService,
    ListActions
  ],
  exports: [
    AddListModalComponent
  ]
})
export class ProjectListModule {
}
