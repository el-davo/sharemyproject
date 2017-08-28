import {LandingComponent} from './landing/landing.component';
import {TokensComponent} from './tokens/tokens.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'screenshots',
    component: LandingComponent
  },
  {
    path: 'screenshots/tokens',
    component: TokensComponent
  }
];

export const ScreenshotsRoutes = RouterModule.forChild(routes);
