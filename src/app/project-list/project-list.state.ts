import {Project} from '../projects/projects.state';

export const projectListState: ProjectListState = {
  isFetchingProjectList: false,
  isFetchingSelectedProjectList: false,
  isAddingProjectList: false,
  showAddProjectListModal: false,
  addProjectListForm: {
    id: null,
    name: '',
    description: ''
  },
  selectedProjectList: [],
  projectList: []
};

export interface ProjectListState {
  isFetchingProjectList: boolean;
  isFetchingSelectedProjectList: boolean;
  isAddingProjectList: boolean;
  showAddProjectListModal: boolean;
  addProjectListForm: ProjectList
  selectedProjectList: Project[];
  projectList: ProjectList[];
}

export interface ProjectList {
  id: string;
  name: string;
  description: string;
}
