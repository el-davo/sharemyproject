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
import {ReleaseTogglesService} from './release-toggles/epics/release-toggles.service';
import {AppComponent} from './app.component';
import {ReleaseTogglesComponent} from './release-toggles/release-toggles.component';
import {ReleaseToggleEditModalComponent} from './release-toggles/modal/release-toggle-edit-modal.component';
import {ClarityModule} from 'clarity-angular';
import {ReleaseTogglesActions} from './release-toggles/release-toggles.actions';
import {ReleaseTogglesEpics} from './release-toggles/epics/release-toggles.epic';
import {routes} from './routes';

import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ReleaseTogglesComponent,
    ReleaseToggleEditModalComponent,
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
    NgReduxRouterModule
  ],
  providers: [
    ReleaseTogglesService,
    ReleaseTogglesActions,
    ReleaseTogglesEpics
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<any>,
              ngReduxRouter: NgReduxRouter,
              private releaseTogglesEpics: ReleaseTogglesEpics) {

    const epics = combineEpics(
      this.releaseTogglesEpics.fetchReleaseToggles,
      this.releaseTogglesEpics.editReleaseToggle
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
