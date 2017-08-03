import {LoginComponent} from './login/login.component';
import {ProjectsComponent} from './links/links.component';
import {ProjectListComponent} from './lists/list.component';
import {SelectedListComponent} from './lists/selected-list/selected-list.component';

export const routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'links',
    component: ProjectsComponent
  },
  {
    path: 'lists',
    component: ProjectListComponent,
    children: [
      {
        path: ':id',
        component: SelectedListComponent
      }
    ]
  }
];
