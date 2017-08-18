import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedbackActions} from './feedback.actions';
import {HoverButtonComponent} from './hover-button/hover-button.component';
import {ClrIconModule} from 'clarity-angular/icon/icon.module';
import {ClrModalModule} from 'clarity-angular/modal/modal.module';
import {ClrLoadingModule} from 'clarity-angular/utils/loading/loading.module'
import {FormsModule} from '@angular/forms';
import {NgReduxFormModule} from '@angular-redux/form/dist/source';
import {FeedbackModalComponent} from './feedback-modal/feedback-modal.component';
import {FeedbackService} from './feedback.service';
import {Angulartics2Module} from 'angulartics2';

@NgModule({
  imports: [
    CommonModule,
    ClrIconModule,
    ClrModalModule,
    ClrLoadingModule,
    FormsModule,
    NgReduxFormModule,
    Angulartics2Module.forChild(),
  ],
  declarations: [
    HoverButtonComponent,
    FeedbackModalComponent
  ],
  providers: [
    FeedbackActions,
    FeedbackService
  ],
  exports: [
    HoverButtonComponent,
    FeedbackModalComponent
  ]
})
export class FeedbackModule {
}
