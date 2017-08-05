import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgReduxModule, NgRedux} from '@angular-redux/store';
import {createLogger} from 'redux-logger';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {rootReducer} from './root.reducer';
import {FormsModule} from '@angular/forms';
import {NgReduxFormModule} from '@angular-redux/form';
import {NgReduxRouterModule, NgReduxRouter} from '@angular-redux/router';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
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

import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import {ListEpics} from './lists/epics/list.epics';
import {LoginEpics} from './login/epics/login.epics';
import {InitModule} from './init/init.module';
import {InitEpics} from './init/epics/init.epics';
import {IsLoggedInGuard} from './router/is-logged-in.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
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
    InitModule
  ],
  providers: [
    InitEpics,
    LoginEpics,
    LinksEpics,
    ListEpics,
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
              private listEpics: ListEpics) {

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
      this.listEpics.addLinkToList
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
