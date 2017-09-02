import {LandingComponent} from './landing/landing.component';
import {TokensComponent} from './tokens/tokens.component';
import {RouterModule, Routes} from '@angular/router';
import {ScreenshotsComponent} from './screenshots.component';
import {S3Component} from './s3/s3.component';
import {IsLoggedInGuard} from '../router/is-logged-in.guard';

const routes: Routes = [
  {
    path: 'screenshots',
    component: LandingComponent
  },
  {
    path: 'screenshots/admin',
    component: ScreenshotsComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      {
        path: 'tokens',
        component: TokensComponent,
        canActivate: [IsLoggedInGuard],
      },
      {
        path: 's3',
        component: S3Component,
        canActivate: [IsLoggedInGuard],
      }
    ]
  }
];

export const ScreenshotsRoutes = RouterModule.forChild(routes);
