import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {LinksService} from './links.service';
import {LinksActions} from './links.actions';
import {LinksComponent} from './links.component';
import {AddLinkModalComponent} from './modal/add/add-link-modal.component';
import {ClrModalModule} from 'clarity-angular/modal/modal.module';
import {NgReduxFormModule} from '@angular-redux/form/dist/source';
import {ClrLoadingModule} from 'clarity-angular/utils/loading/loading.module'
import {ClrDatagridModule} from 'clarity-angular/data/datagrid/datagrid.module';
import {FormsModule} from '@angular/forms';
import {DeleteLinkModalComponent} from './modal/delete/delete-link-modal.component';
import {AppCommonModule} from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    ClrModalModule,
    NgReduxFormModule,
    FormsModule,
    ClrLoadingModule,
    ClrDatagridModule,
    AppCommonModule
  ],
  declarations: [
    ListComponent,
    LinksComponent,
    AddLinkModalComponent,
    DeleteLinkModalComponent
  ],
  providers: [
    LinksService,
    LinksActions
  ],
  exports: [
    AddLinkModalComponent
  ]
})
export class ProjectsModule {
}
