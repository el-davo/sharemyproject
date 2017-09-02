import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {S3Component} from './s3.component';
import {S3Actions} from './s3.actions';
import {S3Service} from './s3.service';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    S3Component,
    EmptyComponent
  ],
  exports: [
    S3Component
  ],
  providers: [
    S3Actions,
    S3Service
  ]
})
export class S3Module {
}
