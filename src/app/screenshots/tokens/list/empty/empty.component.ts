import {Component} from '@angular/core';
import {TokensActions} from '../../tokens.actions';
import {dispatch} from '@angular-redux/store';

@Component({
  selector: 'app-screenshots-tokens-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent {

  constructor(private tokensActions: TokensActions) {
  }

  @dispatch()
  showAddUserTokenModal = () => this.tokensActions.showAddUserTokenModal();
}
