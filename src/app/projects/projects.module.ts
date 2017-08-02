import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {ProjectsService} from './projects.service';
import {ProjectsActions} from './projects.actions';
import {ProjectsComponent} from './projects.component';
import {AddProjectModalComponent} from './modal/add/add-project-modal.component';
import {ClrModalModule} from 'clarity-angular/modal/modal.module';
import {NgReduxFormModule} from '@angular-redux/form/dist/source';
import {ClrLoadingModule} from 'clarity-angular/utils/loading/loading.module'
import {ClrDatagridModule} from 'clarity-angular/data/datagrid/datagrid.module';
import {FormsModule} from '@angular/forms';
import {DeleteProjectModalComponent} from './modal/delete/delete-project-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ClrModalModule,
    NgReduxFormModule,
    FormsModule,
    ClrLoadingModule,
    ClrDatagridModule
  ],
  declarations: [
    ListComponent,
    ProjectsComponent,
    AddProjectModalComponent,
    DeleteProjectModalComponent
  ],
  providers: [
    ProjectsService,
    ProjectsActions
  ],
  exports: [
    AddProjectModalComponent
  ]
})
export class ProjectsModule {
}
