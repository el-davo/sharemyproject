import {Component, Input} from '@angular/core';
import {Project} from '../projects.state';
import {ProjectsActions} from '../projects.actions';
import {dispatch} from '@angular-redux/store';

@Component({
  selector: 'app-project-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() project: Project;

  constructor(private projectsActions: ProjectsActions) {
  }

  @dispatch()
  showDeleteProjectModal() {
    return this.projectsActions.showDeleteProjectModal(this.project);
  }

}
