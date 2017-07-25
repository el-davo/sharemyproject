import {ProjectsComponent} from './projects/projects.component';
import {ProjectListComponent} from './project-list/project-list.component';

export const routes = [
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  }, {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'my-lists',
    component: ProjectListComponent
  }
];
