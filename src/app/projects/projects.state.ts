export const projectState: ProjectsState = {
  isFetchingProjects: false,
  showAddProjectModal: false,
  projects: []
};

export interface ProjectsState {
  isFetchingProjects: boolean;
  showAddProjectModal: boolean;
  projects: Project[];
}

export interface Project {
  name: string;
  description: string;
}
