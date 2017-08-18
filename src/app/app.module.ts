import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {createLogger} from 'redux-logger';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {rootReducer} from './root.reducer';
import {FormsModule} from '@angular/forms';
import {NgReduxFormModule} from '@angular-redux/form';
import {NgReduxRouter, NgReduxRouterModule} from '@angular-redux/router';
import {Angulartics2GoogleAnalytics, Angulartics2Module} from 'angulartics2';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import * as persistState from 'redux-localstorage'
import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {ProjectsModule} from './links/links.module';
import {SearchModule} from './search/search.module';
import {routes} from './routes';
import {LinksEpics} from './links/epics/links.epics';
import {NavbarModule} from './navbar/navbar.module';
import {ProjectListModule} from './lists/list.module';
import {LoginModule} from './login/login.module';

import {ListEpics} from './lists/epics/list.epics';
import {LoginEpics} from './login/epics/login.epics';
import {InitModule} from './init/init.module';
import {InitEpics} from './init/epics/init.epics';
import {IsLoggedInGuard} from './router/is-logged-in.guard';
import {LandingModule} from './landing/landing.module';
import {SearchEpics} from './search/epics/search.epics';
import {AppCommonModule} from './common/common.module';
import {LandingEpics} from './landing/epics/landing.epics';
import {FeedbackEpics} from './feedback/epics/feedback.epics';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    NgReduxModule,
    NgReduxFormModule,
    NgReduxRouterModule,
    NavbarModule,
    ProjectsModule,
    SearchModule,
    ProjectListModule,
    LoginModule,
    InitModule,
    LandingModule,
    AppCommonModule
  ],
  providers: [
    InitEpics,
    LoginEpics,
    LinksEpics,
    ListEpics,
    SearchEpics,
    LandingEpics,
    FeedbackEpics,
    IsLoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<any>,
              ngReduxRouter: NgReduxRouter,
              private initEpics: InitEpics,
              private loginEpics: LoginEpics,
              private linksEpics: LinksEpics,
              private listEpics: ListEpics,
              private searchEpics: SearchEpics,
              private landingEpics: LandingEpics,
              private feedbackEpics: FeedbackEpics) {

    const epics = combineEpics(
      this.initEpics.appInit,
      this.loginEpics.socialLoginFacebook,
      this.loginEpics.socialLoginGithub,
      this.loginEpics.logout,
      this.linksEpics.fetchLinks,
      this.linksEpics.addLink,
      this.linksEpics.deleteLink,
      this.listEpics.fetchList,
      this.listEpics.fetchSelectedListLinks,
      this.listEpics.addList,
      this.listEpics.deleteList,
      this.listEpics.addLinkToList,
      this.searchEpics.search,
      this.searchEpics.fetchSelectedSearchList,
      this.landingEpics.fetchLatestLists,
      this.feedbackEpics.determineShowFeedbackButton,
      this.feedbackEpics.addFeedback
    );

    const middleware = [
      createEpicMiddleware(epics),
      createLogger(),
      reduxImmutableStateInvariant.default()
    ];

    const enhancers = [];

    if (environment.hmr) {
      enhancers.push(persistState());
    }

    this.ngRedux.configureStore(rootReducer, {}, middleware, enhancers);

    ngReduxRouter.initialize();
  }

}
