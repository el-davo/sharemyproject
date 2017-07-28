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
    case ProjectsActions.ADD_PROJECT:
      return {...state, isAddingProject: true};
    case ProjectsActions.ADD_PROJECT_SUCCESS:
      return {...state, isAddingProject: false, projects: [...state.projects, action.project]};
    case ProjectsActions.ADD_PROJECT_FAIL:
      return {...state, isAddingProject: false};
    case ProjectsActions.SHOW_DELETE_PROJECT_MODAL:
      return {...state, showDeleteProjectModal: true, deletingProject: action.project};
    case ProjectsActions.HIDE_DELETE_PROJECT_MODAL:
      return {...state, showDeleteProjectModal: false, deletingProject: null};
    case ProjectsActions.DELETE_PROJECT:
      return {...state, isDeletingProject: true};
    case ProjectsActions.DELETE_PROJECT_SUCCESS:
      return {...state, isDeletingProject: false, projects: state.projects.filter(project => {
        return project.id !== action.project.id
      })};
    case ProjectsActions.DELETE_PROJECT_FAIL:
      return {...state, isDeletingProject: false};
    default:
      return state;
  }
};
