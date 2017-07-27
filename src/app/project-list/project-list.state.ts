import {Project} from '../projects/projects.state';

export const projectListState: ProjectListState = {
  isFetchingProjectList: false,
  isFetchingSelectedProjectList: false,
  isAddingProjectList: false,
  isDeletingProject: false,
  showAddProjectListModal: false,
  showDeleteProjectListModal: false,
  addProjectListForm: {
    id: null,
    name: '',
    isPrivate: false,
    description: ''
  },
  deletingProjectList: null,
  selectedProjectList: [],
  projectList: []
};

export interface ProjectListState {
  isFetchingProjectList: boolean;
  isFetchingSelectedProjectList: boolean;
  isAddingProjectList: boolean;
  isDeletingProject: boolean;
  showAddProjectListModal: boolean;
  showDeleteProjectListModal: boolean;
  addProjectListForm: ProjectList;
  deletingProjectList: ProjectList;
  selectedProjectList: Project[];
  projectList: ProjectList[];
}

export interface ProjectList {
  id: string;
  name: string;
  isPrivate: boolean;
  description: string;
}
