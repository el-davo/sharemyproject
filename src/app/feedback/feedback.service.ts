import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {urls} from '../common/urls';

@Injectable()
export class FeedbackService {

  constructor(private http: Http) {
  }

  addFeedback(feedback) {
    return this.http.post(`${urls.apiUrl}/feedback`, feedback).map(res => res.json());
  }
}
