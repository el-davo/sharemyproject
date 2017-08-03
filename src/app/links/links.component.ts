import {Component, OnInit} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {LinksActions} from './links.actions';

@Component({
  selector: 'app-projects',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsActions: LinksActions) {
  }

  @dispatch()
  ngOnInit() {
    return this.projectsActions.fetchLinks();
  }

}
