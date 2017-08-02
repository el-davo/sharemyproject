import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './init.component';
import {InitActions} from './init.actions';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InitComponent
  ],
  exports: [
    InitComponent
  ],
  providers: [
    InitActions
  ]
})
export class InitModule { }
