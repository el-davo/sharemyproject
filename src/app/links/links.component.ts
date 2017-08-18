import {Component, OnInit} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {LinksActions} from './links.actions';
import {Angulartics2GoogleAnalytics} from 'angulartics2';

@Component({
  selector: 'app-projects',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor(private projectsActions: LinksActions, angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
  }

  @dispatch()
  ngOnInit() {
    return this.projectsActions.fetchLinks();
  }

}
