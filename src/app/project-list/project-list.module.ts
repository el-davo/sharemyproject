import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import {ProjectListService} from './project-list.service';
import {ProjectListActions} from './project-list.actions';
import {RouterModule} from '@angular/router';
import {ClrIconModule} from 'clarity-angular/icon/icon.module';
import {ClrModalModule} from 'clarity-angular/modal/modal.module';
import {NgReduxFormModule} from '@angular-redux/form/dist/source';
import {ClrLoadingModule} from 'clarity-angular/utils/loading/loading.module'
import {FormsModule} from '@angular/forms';
import { SelectedListComponent } from './selected-list/selected-list.component';
import { CardComponent } from './card/card.component';
import { AddProjectListModalComponent } from './modal/add-project-list-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClrIconModule,
    ClrModalModule,
    NgReduxFormModule,
    ClrLoadingModule,
    FormsModule
  ],
  declarations: [
    ProjectListComponent,
    SelectedListComponent,
    CardComponent,
    AddProjectListModalComponent
  ],
  providers: [
    ProjectListService,
    ProjectListActions
  ],
  exports: [
    AddProjectListModalComponent
  ]
})
export class ProjectListModule { }
