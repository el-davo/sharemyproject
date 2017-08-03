import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ProjectList} from './project-list.state';
import {Project} from '../projects/projects.state';
import {urls} from '../common/urls';

@Injectable()
export class ProjectListService {

  constructor(private http: Http) { }

  fetchProjectList(authorization: string, userId: string): Observable<ProjectList[]> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.get(`${urls.apiUrl}/users/${userId}/lists`, options).map(res => res.json());
  }

  fetchSelectedListProject(authorization: string, listId: string): Observable<Project[]> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.get(`${urls.apiUrl}/lists/${listId}/links`, options).map(res => res.json());
  }

  addProjectList(authorization: string, userId: string, projectList: ProjectList): Observable<ProjectList> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.post(`${urls.apiUrl}/users/${userId}/lists`, projectList, options).map(res => res.json());
  }

  deleteProjectList(authorization: string, projectList: ProjectList): Observable<ProjectList> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.delete(`${urls.apiUrl}/lists/${projectList.id}`, options).map(res => res.json());
  }
}
