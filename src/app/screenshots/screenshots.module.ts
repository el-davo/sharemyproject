import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TokensModule} from './tokens/tokens.module';
import {LandingModule} from './landing/landing.module';
import {ScreenshotsRoutes} from './routes';
import {TokensService} from './tokens.service';
import {ScreenshotsComponent} from './screenshots.component';
import {ClrVerticalNavModule} from 'clarity-angular/layout/vertical-nav/vertical-nav.module';
import {RouterModule} from '@angular/router';
import {S3Module} from './s3/s3.module';

@NgModule({
  imports: [
    CommonModule,
    TokensModule,
    S3Module,
    LandingModule,
    ScreenshotsRoutes,
    ClrVerticalNavModule,
    RouterModule
  ],
  declarations: [ScreenshotsComponent],
  providers: [
    TokensService
  ]
})
export class ScreenshotsModule {
}
