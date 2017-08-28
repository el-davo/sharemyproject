import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TokensModule} from './tokens/tokens.module';
import {LandingModule} from './landing/landing.module';

@NgModule({
  imports: [
    CommonModule,
    TokensModule,
    LandingModule
  ],
  declarations: []
})
export class ScreenshotsModule {
}
