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
import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {ClarityModule} from 'clarity-angular';
import {ProjectsModule} from './projects/projects.module';
import {SearchModule} from './search/search.module';
import {routes} from './routes';
import {ProjectsEpics} from './projects/epics/projects.epics';

import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
    NgReduxModule,
    NgReduxFormModule,
    NgReduxRouterModule,
    ProjectsModule,
    SearchModule
  ],
  providers: [
    ProjectsEpics
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<any>,
              ngReduxRouter: NgReduxRouter,
              private projectsEpics: ProjectsEpics) {

    const epics = combineEpics(
      this.projectsEpics.fetchProjects
    );

    const middleware = [
      createEpicMiddleware(epics),
      createLogger(),
      reduxImmutableStateInvariant.default()
    ];

    ngRedux.configureStore(rootReducer, {}, middleware);
    ngReduxRouter.initialize();
  }

}
