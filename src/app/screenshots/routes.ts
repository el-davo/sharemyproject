import {LandingComponent} from './landing/landing.component';
import {TokensComponent} from './tokens/tokens.component';
import {RouterModule, Routes} from '@angular/router';
import {ScreenshotsComponent} from './screenshots.component';
import {S3Component} from './s3/s3.component';

const routes: Routes = [
  {
    path: 'screenshots',
    component: LandingComponent
  },
  {
    path: 'screenshots/admin',
    component: ScreenshotsComponent,
    children: [
      {
        path: 'tokens',
        component: TokensComponent
      },
      {
        path: 's3',
        component: S3Component
      }
    ]
  }
];

export const ScreenshotsRoutes = RouterModule.forChild(routes);
