import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {select} from '@angular-redux/store';
import {Identity, SocialUser} from '../../../login/social/social-user.interface';

@Component({
  selector: 'app-nav-widget-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @select(['login', 'userData']) login$: Observable<SocialUser<Identity>>;

  constructor() { }

  ngOnInit() {
  }

}
