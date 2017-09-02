import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {S3Component} from './s3.component';
import {S3Actions} from './s3.actions';
import {S3Service} from './s3.service';
import {EmptyComponent} from './empty/empty.component';
import {ClrWizardModule} from 'clarity-angular/wizard/wizard.module';
import {AddS3WizardModalComponent} from './add-s3-wizard-modal/add-s3-wizard-modal.component';
import {S3ConfigFormComponent} from './add-s3-wizard-modal/s3-config-form/s3-config-form.component';
import {S3VerificationFormComponent} from './add-s3-wizard-modal/s3-verification-form/s3-verification-form.component';
import {NgReduxFormModule} from '@angular-redux/form/dist/source';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClrWizardModule,
    NgReduxFormModule,
    FormsModule
  ],
  declarations: [
    S3Component,
    EmptyComponent,
    AddS3WizardModalComponent,
    S3ConfigFormComponent,
    S3VerificationFormComponent
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
