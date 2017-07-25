import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import {ProjectListService} from './project-list.service';
import {ProjectListActions} from './project-list.actions';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProjectListComponent
  ],
  providers: [
    ProjectListService,
    ProjectListActions
  ]
})
export class ProjectListModule { }
