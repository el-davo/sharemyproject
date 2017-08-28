import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TokensModule} from './tokens/tokens.module';
import {LandingModule} from './landing/landing.module';
import {ScreenshotsRoutes} from './routes';

@NgModule({
  imports: [
    CommonModule,
    TokensModule,
    LandingModule,
    ScreenshotsRoutes
  ],
  declarations: []
})
export class ScreenshotsModule {
}
