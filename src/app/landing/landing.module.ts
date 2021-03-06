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
import {LatestListsComponent} from './latest-lists/latest-lists.component';
import {LandingActions} from './landing.actions';
import {LandingEpics} from './epics/landing.epics';
import {ListComponent} from './latest-lists/list/list.component';
import {AppCommonModule} from '../common/common.module';
import {FeedbackModule} from '../feedback/feedback.module';

@NgModule({
  imports: [
    CommonModule,
    ClrIconModule,
    ClrNavigationModule,
    RouterModule,
    NavbarModule,
    AppCommonModule,
    FeedbackModule
  ],
  declarations: [
    LandingComponent,
    NavbarComponent,
    FeaturesComponent,
    StoreLinksCardComponent,
    ShareListsCardComponent,
    AnalyticsCardComponent,
    LatestListsComponent,
    ListComponent
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    LandingActions,
    LandingEpics
  ]
})
export class LandingModule {
}
