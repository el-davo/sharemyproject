import {Component, OnInit} from '@angular/core';
import {S3Actions} from './s3.actions';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {S3State} from './s3.state';

@Component({
  selector: 'app-s3',
  templateUrl: './s3.component.html',
  styleUrls: ['./s3.component.css']
})
export class S3Component implements OnInit {

  @select('s3') readonly s3$: Observable<S3State>;

  constructor(private s3Actions: S3Actions) {
  }

  @dispatch()
  ngOnInit = () => this.s3Actions.fetchS3Configs();

  @dispatch()
  showAddS3WizardModal = () => this.s3Actions.showAddS3WizardModal();
}
