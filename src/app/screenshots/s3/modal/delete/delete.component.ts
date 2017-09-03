import {Component} from '@angular/core';
import {S3Actions} from '../../s3.actions';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {S3State} from '../../s3.state';

@Component({
  selector: 'app-delete-s3-config-modal',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  @select('s3') readonly s3$: Observable<S3State>;

  constructor(private s3Actions: S3Actions) {
  }

  @dispatch()
  hideDeleteS3ConfigModal = () => this.s3Actions.hideDeleteS3ConfigModal();

  @dispatch()
  deleteS3Config = () => this.s3Actions.deleteS3Config();
}
