import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../projects.state';

@Component({
  selector: 'app-project-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() project: Project;


  ngOnInit() {
  }

}
