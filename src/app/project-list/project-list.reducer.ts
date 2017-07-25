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
    case ProjectListActions.FETCH_SELECTED_LIST_PROJECTS:
      return {...state, isFetchingSelectedProjectList: true};
    case ProjectListActions.FETCH_SELECTED_LIST_PROJECTS_SUCCESS:
      return {...state, isFetchingSelectedProjectList: false, selectedProjectList: action.projects};
    case ProjectListActions.FETCH_SELECTED_LIST_PROJECTS_FAIL:
      return {...state, isFetchingSelectedProjectList: false};
    case ProjectListActions.SHOW_ADD_PROJECT_LIST_MODAL:
      return {...state, showAddProjectListModal: true};
    case ProjectListActions.HIDE_ADD_PROJECT_LIST_MODAL:
      return {...state, showAddProjectListModal: false};
    case ProjectListActions.ADD_PROJECT_LIST:
      return {...state, isAddingProjectList: true};
    case ProjectListActions.ADD_PROJECT_LIST_SUCCESS:
      return {...state, isAddingProjectList: false, projectList: [...state.projectList, action.projectList]};
    case ProjectListActions.ADD_PROJECT_LIST_FAIL:
      return {...state, isAddingProjectList: false};
    default:
      return state;
  }
};
