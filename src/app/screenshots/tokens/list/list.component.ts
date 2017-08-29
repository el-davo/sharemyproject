import {Component, OnInit} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {TokensActions} from '../tokens.actions';
import {Observable} from 'rxjs/Observable';
import {TokensState} from '../tokens.state';

@Component({
  selector: 'app-screenshots-tokens-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @select('tokens') tokens$: Observable<TokensState>;

  constructor(private tokensActions: TokensActions) {
  }

  @dispatch()
  ngOnInit() {
    return this.tokensActions.fetchUserTokens();
  }

}
