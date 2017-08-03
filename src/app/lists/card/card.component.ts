import {Component, Input, OnInit} from '@angular/core';
import {List} from '../list.state';

@Component({
  selector: 'app-project-list-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() list: List;

  constructor() { }

  ngOnInit() {
  }

}
