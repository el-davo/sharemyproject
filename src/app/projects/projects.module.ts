import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {ProjectsService} from './projects.service';
import {ProjectsActions} from './projects.actions';
import { ProjectsComponent } from './projects.component';
import { CardComponent } from './card/card.component';
import { AddProjectModalComponent } from './modal/add-project-modal.component';
import {ClrModalModule} from 'clarity-angular/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    ClrModalModule
  ],
  declarations: [
    ListComponent,
    ProjectsComponent,
    CardComponent,
    AddProjectModalComponent
  ],
  providers: [
    ProjectsService,
    ProjectsActions
  ]
})
export class ProjectsModule { }
