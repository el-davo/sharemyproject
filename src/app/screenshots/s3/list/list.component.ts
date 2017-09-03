import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {S3Config, S3State} from '../s3.state';
import {S3Actions} from '../s3.actions';

@Component({
  selector: 'app-s3-configs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @select('s3') readonly s3$: Observable<S3State>;

  constructor(private s3Actions: S3Actions) {
  }

  @dispatch()
  showDeleteS3ConfigModal = (s3Config: S3Config) => this.s3Actions.showDeleteS3ConfigModal(s3Config);

}
