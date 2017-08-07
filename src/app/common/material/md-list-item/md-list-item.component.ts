import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-md-list-item',
  templateUrl: './md-list-item.component.html',
  styleUrls: ['./md-list-item.component.css']
})
export class MdListItemComponent implements OnInit {

  @Input() primaryText: string;
  @Input() secondaryText: string;

  constructor() {
  }

  ngOnInit() {
  }

}
