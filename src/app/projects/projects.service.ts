import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Project} from './projects.state';
import {urls} from '../common/urls';

@Injectable()
export class ProjectsService {

  constructor(private http: Http) {
  }

  fetchProjects(): Observable<Project[]> {
    return this.http.get(`${urls.apiUrl}/projects`).map(res => res.json());
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post(`${urls.apiUrl}/projects`, project).map(res => res.json());
  }

  deleteProject(project: Project): Observable<Project> {
    return this.http.delete(`${urls.apiUrl}/projects/${project.id}`).map(res => res.json());
  }

}
