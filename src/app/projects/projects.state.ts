export const projectState: ProjectsState = {
  isFetchingProjects: false,
  showAddProjectModal: false,
  showDeleteProjectModal: false,
  isAddingProject: false,
  isDeletingProject: false,
  deletingProject: null,
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
  showDeleteProjectModal: boolean;
  isAddingProject: boolean;
  isDeletingProject: boolean;
  deletingProject: Project;
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
