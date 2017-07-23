export const projectState: ProjectsState = {
  isFetchingProjects: false,
  projects: []
};

export interface ProjectsState {
  isFetchingProjects: boolean;
  projects: Project[];
}

export interface Project {
  name: string;
  description: string;
}
