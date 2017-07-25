import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ProjectList} from './project-list.state';

@Injectable()
export class ProjectListService {

  constructor(private http: Http) { }

  fetchProjectList(): Observable<ProjectList[]> {
    return this.http.get(`http://localhost:3001/project-list`).map(res => res.json());
  }
}
