import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {urls} from '../../common/urls';
import {Observable} from 'rxjs/Observable';
import {S3Config} from './s3.state';

@Injectable()
export class S3Service {

  constructor(private http: Http) {
  }

  fetchS3Config(authorization: string): Observable<S3Config> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.get(`${urls.screenshotsTokensApi}/s3Credentials`, options).map(res => res.json().tokens);
  }
}
