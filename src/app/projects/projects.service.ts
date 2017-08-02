import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Project} from './projects.state';
import {urls} from '../common/urls';

@Injectable()
export class ProjectsService {

  constructor(private http: Http) {
  }

  fetchProjects(authorization: string): Observable<Project[]> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.get(`${urls.apiUrl}/projects`, options).map(res => res.json());
  }

  addProject(project: Project, authorization: string): Observable<Project> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.post(`${urls.apiUrl}/projects`, project, options).map(res => res.json());
  }

  deleteProject(project: Project, authorization: string): Observable<Project> {
    const headers = new Headers({authorization});
    const options = new RequestOptions({headers});

    return this.http.delete(`${urls.apiUrl}/projects/${project.id}`, options).map(res => res.json());
  }

}
