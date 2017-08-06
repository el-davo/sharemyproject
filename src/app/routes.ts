import {LoginComponent} from './login/login.component';
import {LinksComponent} from './links/links.component';
import {ListComponent} from './lists/list.component';
import {SelectedListComponent} from './lists/selected-list/selected-list.component';
import {IsLoggedInGuard} from './router/is-logged-in.guard';
import {LandingComponent} from './landing/landing.component';

export const routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'links',
    component: LinksComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'lists',
    component: ListComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      {
        path: ':id',
        component: SelectedListComponent
      }
    ]
  }
];
