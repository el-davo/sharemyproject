import {routerReducer as router} from '@angular-redux/router';
import {composeReducers, defaultFormReducer} from '@angular-redux/form';
import {combineReducers} from 'redux';
import {initReducer as init} from './init/init.reducer';
import {navbarReducer as navbar} from './navbar/navbar.reducer';
import {linksReducer as links} from './links/links.reducer';
import {listsReducer as lists} from './lists/list.reducer';
import {loginReducer as login} from './login/login.reducer';
import {searchReducer as search} from './search/search.reducer';
import {landingReducer as landing} from './landing/landing.reducer';
import {feedbackReducer as feedback} from './feedback/feedback.reducer';

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    router,
    init,
    navbar,
    links,
    lists,
    login,
    search,
    landing,
    feedback
  })
);
