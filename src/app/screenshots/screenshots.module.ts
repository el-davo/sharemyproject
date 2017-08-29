import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TokensModule} from './tokens/tokens.module';
import {LandingModule} from './landing/landing.module';
import {ScreenshotsRoutes} from './routes';
import {TokensService} from './tokens.service';

@NgModule({
  imports: [
    CommonModule,
    TokensModule,
    LandingModule,
    ScreenshotsRoutes
  ],
  declarations: [],
  providers: [
    TokensService
  ]
})
export class ScreenshotsModule {
}
