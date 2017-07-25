import {ProjectListState, projectListState} from './project-list.state';
import {ProjectListActions} from './project-list.actions';

export const projectListReducer = (state: ProjectListState = projectListState, action): ProjectListState => {
  switch (action.type) {
    case ProjectListActions.FETCH_PROJECT_LIST:
      return {...state, isFetchingProjectList: true};
    case ProjectListActions.FETCH_PROJECT_LIST_SUCCESS:
      return {...state, isFetchingProjectList: false, projectList: action.projectList};
    case ProjectListActions.FETCH_PROJECT_LIST_FAIL:
      return {...state, isFetchingProjectList: false};
    default:
      return state;
  }
};
