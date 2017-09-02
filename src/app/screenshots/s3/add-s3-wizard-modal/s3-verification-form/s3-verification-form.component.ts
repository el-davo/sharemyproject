import {Component} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {S3State} from '../../s3.state';
import {S3Actions} from '../../s3.actions';

@Component({
  selector: 'app-s3-verification-form',
  templateUrl: './s3-verification-form.component.html',
  styleUrls: ['./s3-verification-form.component.css']
})
export class S3VerificationFormComponent {

  @select('s3') readonly s3$: Observable<S3State>;

  constructor(private s3Actions: S3Actions) {
  }

}
