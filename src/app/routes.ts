import {LinksComponent} from './links/links.component';
import {ListComponent} from './lists/list.component';
import {SelectedListComponent} from './lists/selected-list/selected-list.component';
import {IsLoggedInGuard} from './router/is-logged-in.guard';
import {LandingComponent} from './landing/landing.component';
import {SearchSelectedListComponent} from './search/selected/search-selected-list/search-selected-list.component';
import {HideSearchOverlayGuard} from './search/hide-search-overlay.guard';

export const routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'links',
    component: LinksComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'search/lists/:id',
    component: SearchSelectedListComponent,
    canActivate: [HideSearchOverlayGuard]
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
