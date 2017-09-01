import {Component} from '@angular/core';
import {TokensActions} from './tokens.actions';
import {dispatch} from '@angular-redux/store';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent {

  constructor(private tokensActions: TokensActions) {
  }

  @dispatch()
  showAddUserTokenModal = () => this.tokensActions.showAddUserTokenModal();
}
