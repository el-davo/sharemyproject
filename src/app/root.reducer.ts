import {routerReducer as router} from '@angular-redux/router';
import {composeReducers, defaultFormReducer} from '@angular-redux/form';
import {combineReducers} from 'redux';
import {initReducer as init} from './init/init.reducer';
import {navbarReducer as navbar} from './navbar/navbar.reducer';
import {projectsReducer as projects} from './projects/projects.reducer';
import {projectListReducer as projectList} from './project-list/project-list.reducer';
import {loginReducer as login} from './login/login.reducer';

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    router,
    init,
    navbar,
    projects,
    projectList,
    login
  })
);
