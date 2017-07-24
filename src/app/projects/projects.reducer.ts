import {ProjectsActions} from './projects.actions';
import {ProjectsState, projectState} from './projects.state';

export const projectsReducer = (state: ProjectsState = projectState, action): ProjectsState => {
  switch (action.type) {
    case ProjectsActions.FETCH_PROJECTS:
      return {...state, isFetchingProjects: true};
    case ProjectsActions.FETCH_PROJECTS_SUCCESS:
      return {...state, isFetchingProjects: false, projects: action.projects};
    case ProjectsActions.FETCH_PROJECTS_FAIL:
      return {...state, isFetchingProjects: false};
    case ProjectsActions.SHOW_ADD_PROJECT_MODAL:
      return {...state, showAddProjectModal: true};
    case ProjectsActions.HIDE_ADD_PROJECT_MODAL:
      return {...state, showAddProjectModal: false};
    default:
      return state;
  }
};
