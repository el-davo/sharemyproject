import {LandingComponent} from './landing/landing.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'screenshots',
    component: LandingComponent
  }
];

export const ScreenshotsRoutes = RouterModule.forChild(routes);
