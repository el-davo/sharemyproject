import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ProjectList} from './project-list.state';
import {Project} from '../projects/projects.state';

@Injectable()
export class ProjectListService {

  constructor(private http: Http) { }

  fetchProjectList(): Observable<ProjectList[]> {
    return this.http.get(`http://localhost:3001/project-list`).map(res => res.json());
  }

  fetchSelectedListProject(listId: string): Observable<Project[]> {
    return this.http.get(`http://localhost:3001/project-list/${listId}/projects`).map(res => res.json());
  }

  addProjectList(projectList: ProjectList): Observable<ProjectList> {
    return this.http.post(`http://localhost:3001/project-list`, projectList).map(res => res.json());
  }

  deleteProjectList(projectList: ProjectList): Observable<ProjectList> {
    return this.http.delete(`http://localhost:3001/project-list/${projectList.id}`).map(res => res.json());
  }
}
