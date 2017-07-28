import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Project} from './projects.state';

@Injectable()
export class ProjectsService {

  constructor(private http: Http) {
  }

  fetchProjects(): Observable<Project[]> {
    return this.http.get(`http://localhost:3001/projects`).map(res => res.json());
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post(`http://localhost:3001/projects`, project).map(res => res.json());
  }

  deleteProject(project: Project): Observable<Project> {
    return this.http.delete(`http://localhost:3001/projects/${project.id}`).map(res => res.json());
  }

}
