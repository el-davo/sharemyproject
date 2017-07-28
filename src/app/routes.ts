import {LoginComponent} from './login/login.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {SelectedListComponent} from './project-list/selected-list/selected-list.component';

export const routes = [
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'my-lists',
    component: ProjectListComponent,
    children: [
      {
        path: ':id',
        component: SelectedListComponent
      }
    ]
  }
];
