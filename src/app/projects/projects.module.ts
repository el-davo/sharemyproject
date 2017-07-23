import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {ProjectsService} from './projects.service';
import {ProjectsActions} from './projects.actions';
import { ProjectsComponent } from './projects.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, ProjectsComponent],
  providers: [
    ProjectsService,
    ProjectsActions
  ]
})
export class ProjectsModule { }
