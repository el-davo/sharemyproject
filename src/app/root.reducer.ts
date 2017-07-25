import {routerReducer as router} from '@angular-redux/router';
import {composeReducers, defaultFormReducer} from '@angular-redux/form';
import {combineReducers} from 'redux';
import {navbarReducer as navbar} from './navbar/navbar.reducer';
import {projectsReducer as projects} from './projects/projects.reducer';
import {projectListReducer as projectList} from './project-list/project-list.reducer';

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    router,
    navbar,
    projects,
    projectList
  })
);
