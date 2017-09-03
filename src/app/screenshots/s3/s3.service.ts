import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {urls} from '../../common/urls';
import {Observable} from 'rxjs/Observable';
import {S3Config} from './s3.state';

@Injectable()
export class S3Service {

  constructor(private http: Http) {
  }

  fetchS3Configs(authorization: string): Observable<S3Config[]> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.get(`${urls.screenshotsTokensApi}/s3Credentials`, options).map(res => res.json());
  }

  verifyS3Config(authorization: string, s3Config: S3Config): Observable<boolean> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.post(`${urls.screenshotsTokensApi}/s3Validators/verifyS3Config`, {s3Config}, options)
      .map(res => res.json().success);
  }

  addS3Config(authorization: string, userId: string, s3Config: S3Config): Observable<S3Config> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.post(`${urls.screenshotsTokensApi}/s3Credentials`, {
      ...s3Config,
      userId
    }, options).map(res => res.json());
  }

  deleteS3Config(authorization: string, s3Config: S3Config): Observable<S3Config> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.delete(`${urls.screenshotsTokensApi}/s3Credentials/${s3Config.id}`, options)
      .map(res => res.json());
  }
}
