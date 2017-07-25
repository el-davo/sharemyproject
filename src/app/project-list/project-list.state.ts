import {Project} from '../projects/projects.state';

export const projectListState: ProjectListState = {
  isFetchingProjectList: false,
  projectList: []
};

export interface ProjectListState {
  isFetchingProjectList: boolean;
  projectList: ProjectList[]
}

export interface ProjectList {
  id: string;
  name: string;
  projects: Project[]
}
