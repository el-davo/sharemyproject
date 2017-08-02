import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ProjectList} from './project-list.state';
import {Project} from '../projects/projects.state';
import {urls} from '../common/urls';

@Injectable()
export class ProjectListService {

  constructor(private http: Http) { }

  fetchProjectList(authorization: string): Observable<ProjectList[]> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.get(`${urls.apiUrl}/project-list`, options).map(res => res.json());
  }

  fetchSelectedListProject(authorization: string, listId: string): Observable<Project[]> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.get(`${urls.apiUrl}/project-list/${listId}/projects`, options).map(res => res.json());
  }

  addProjectList(authorization: string, projectList: ProjectList): Observable<ProjectList> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.post(`${urls.apiUrl}/project-list`, projectList, options).map(res => res.json());
  }

  deleteProjectList(authorization: string, projectList: ProjectList): Observable<ProjectList> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.delete(`${urls.apiUrl}/project-list/${projectList.id}`, options).map(res => res.json());
  }
}
