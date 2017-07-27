export const projectState: ProjectsState = {
  isFetchingProjects: false,
  showAddProjectModal: false,
  isAddingProject: false,
  addProjectForm: {
    id: null,
    name: '',
    isPrivate: false,
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
  id: string;
  name: string;
  isPrivate: boolean;
  description: string;
  url: string;
}
