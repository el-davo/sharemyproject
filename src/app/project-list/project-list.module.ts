import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import {ProjectListService} from './project-list.service';
import {ProjectListActions} from './project-list.actions';
import {RouterModule} from '@angular/router';
import { SelectedListComponent } from './selected-list/selected-list.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ProjectListComponent,
    SelectedListComponent,
    CardComponent
  ],
  providers: [
    ProjectListService,
    ProjectListActions
  ]
})
export class ProjectListModule { }
