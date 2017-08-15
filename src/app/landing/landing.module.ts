import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ClrNavigationModule} from 'clarity-angular/layout/nav/navigation.module';
import {ClrIconModule} from 'clarity-angular/icon/icon.module';
import {RouterModule} from '@angular/router';
import {FeaturesComponent} from './features/features.component';
import {StoreLinksCardComponent} from './features/store-links-card/store-links-card.component';
import {ShareListsCardComponent} from './features/share-lists-card/share-lists-card.component';
import {AnalyticsCardComponent} from './features/analytics-card/analytics-card.component';
import {NavbarModule} from '../navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    ClrIconModule,
    ClrNavigationModule,
    RouterModule,
    NavbarModule
  ],
  declarations: [
    LandingComponent,
    NavbarComponent,
    FeaturesComponent,
    StoreLinksCardComponent,
    ShareListsCardComponent,
    AnalyticsCardComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class LandingModule {
}
