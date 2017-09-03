import {Component} from '@angular/core';
import {S3Actions} from '../../../s3.actions';
import {dispatch} from '@angular-redux/store';

@Component({
  selector: 'app-s3-verification-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.css']
})
export class FailComponent {

  constructor(private s3Actions: S3Actions) {
  }

  @dispatch()
  veryS3Config = () => this.s3Actions.veryS3Config();
}
