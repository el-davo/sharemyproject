import {Component} from '@angular/core';
import {S3Actions} from '../s3.actions';
import {dispatch} from '@angular-redux/store';

@Component({
  selector: 'app-s3-config-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent {

  constructor(private s3Actions: S3Actions) {
  }

  @dispatch()
  showAddS3WizardModal = () => this.s3Actions.showAddS3WizardModal();

}
