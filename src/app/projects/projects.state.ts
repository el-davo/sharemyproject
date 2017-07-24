export const projectState: ProjectsState = {
  isFetchingProjects: false,
  showAddProjectModal: false,
  isAddingProject: false,
  addProjectForm: {
    name: '',
    description: '',
    url: ''
  },
  projects: []
};

export interface ProjectsState {
  isFetchingProjects: boolean;
  showAddProjectModal: boolean;
  isAddingProject: boolean;
  addProjectForm: Project;
  projects: Project[];
}

export interface Project {
  name: string;
  description: string;
  url: string;
}
