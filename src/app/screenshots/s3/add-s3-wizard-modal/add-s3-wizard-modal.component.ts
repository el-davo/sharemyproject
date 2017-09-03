import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {S3State} from '../s3.state';
import {S3Actions} from '../s3.actions';

@Component({
  selector: 'app-add-s3-wizard-modal',
  templateUrl: './add-s3-wizard-modal.component.html',
  styleUrls: ['./add-s3-wizard-modal.component.css']
})
export class AddS3WizardModalComponent {

  @select('s3') readonly s3$: Observable<S3State>;

  constructor(private s3Actions: S3Actions) {
  }

  @dispatch()
  hideAddS3WizardModal = () => this.s3Actions.hideAddS3WizardModal();

  @dispatch()
  veryS3Config = () => this.s3Actions.veryS3Config();

  @dispatch()
  addS3Config = () => this.s3Actions.addS3Config();
}
