import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {S3Component} from './s3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    S3Component
  ],
  exports: [
    S3Component
  ]
})
export class S3Module {
}
