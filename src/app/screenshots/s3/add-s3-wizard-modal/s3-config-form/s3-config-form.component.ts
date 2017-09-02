import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {S3State} from '../../s3.state';

@Component({
  selector: 'app-s3-config-form',
  templateUrl: './s3-config-form.component.html',
  styleUrls: ['./s3-config-form.component.css']
})
export class S3ConfigFormComponent implements OnInit {

  @select('s3') readonly s3$: Observable<S3State>;

  constructor() {
  }

  ngOnInit() {
  }

}
