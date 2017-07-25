import {Project} from '../projects/projects.state';

export const projectListState: ProjectListState = {
  isFetchingProjectList: false,
  isFetchingSelectedProjectList: false,
  selectedProjectList: [],
  projectList: []
};

export interface ProjectListState {
  isFetchingProjectList: boolean;
  isFetchingSelectedProjectList: boolean;
  selectedProjectList: Project[];
  projectList: ProjectList[];
}

export interface ProjectList {
  id: string;
  name: string;
}
