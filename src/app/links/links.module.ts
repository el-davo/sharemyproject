import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {LinksService} from './links.service';
import {LinksActions} from './links.actions';
import {LinksComponent} from './links.component';
import {AddLinkModalComponent} from './modal/add/add-link-modal.component';
import {ClrModalModule} from 'clarity-angular/modal/modal.module';
import {NgReduxFormModule} from '@angular-redux/form/dist/source';
import {ClrLoadingModule} from 'clarity-angular/utils/loading/loading.module';
import {ClrDropdownModule} from 'clarity-angular/popover/dropdown/dropdown.module';
import {ClrIconModule} from 'clarity-angular/icon/icon.module';
import {FormsModule} from '@angular/forms';
import {DeleteLinkModalComponent} from './modal/delete/delete-link-modal.component';
import {AppCommonModule} from '../common/common.module';
import {EmptyComponent} from './list/empty/empty.component';
import {EditComponent} from './modal/edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    ClrModalModule,
    NgReduxFormModule,
    FormsModule,
    ClrLoadingModule,
    ClrIconModule,
    ClrDropdownModule,
    AppCommonModule
  ],
  declarations: [
    ListComponent,
    LinksComponent,
    AddLinkModalComponent,
    DeleteLinkModalComponent,
    EmptyComponent,
    EditComponent
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
