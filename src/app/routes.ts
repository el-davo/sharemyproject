import {ProjectsComponent} from './projects/projects.component';

export const routes = [
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  }, {
    path: 'projects',
    component: ProjectsComponent
  }
];
