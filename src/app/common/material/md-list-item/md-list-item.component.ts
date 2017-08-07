import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-md-list-item',
  templateUrl: './md-list-item.component.html',
  styleUrls: ['./md-list-item.component.css']
})
export class MdListItemComponent {

  @Input() primaryText: string;
  @Input() secondaryText: string;
  @Input() onClick: Function;

  click() {
    this.onClick ? this.onClick() : null;
  }

}
