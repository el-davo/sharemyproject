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
import {ProjectsModule} from './projects/projects.module';
import {SearchModule} from './search/search.module';
import {routes} from './routes';
import {ProjectsEpics} from './projects/epics/projects.epics';
import {NavbarModule} from './navbar/navbar.module';
import {ProjectListModule} from './project-list/project-list.module';
import {LoginModule} from './login/login.module';

import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import {ProjectListEpics} from './project-list/epics/project-list.epics';
import {LoginEpics} from './login/epics/login.epics';

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
    LoginModule
  ],
  providers: [
    LoginEpics,
    ProjectsEpics,
    ProjectListEpics
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<any>,
              ngReduxRouter: NgReduxRouter,
              private loginEpics: LoginEpics,
              private projectsEpics: ProjectsEpics,
              private projectListEpics: ProjectListEpics) {

    const epics = combineEpics(
      this.loginEpics.socialLoginFacebook,
      this.loginEpics.socialLoginGithub,
      this.projectsEpics.fetchProjects,
      this.projectsEpics.addProject,
      this.projectsEpics.deleteProject,
      this.projectListEpics.fetchProjectList,
      this.projectListEpics.fetchSelectedListProjects,
      this.projectListEpics.addProjectList,
      this.projectListEpics.deleteProjectList
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
