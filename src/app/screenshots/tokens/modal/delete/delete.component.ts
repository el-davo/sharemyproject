import {Component} from '@angular/core';
import {TokensActions} from '../../tokens.actions';
import {TokensState} from '../../tokens.state';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-screenshots-token-delete-modal',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  @select('tokens') readonly tokens$: Observable<TokensState>;

  constructor(private tokensActions: TokensActions) {
  }

  @dispatch()
  hideDeleteUserTokenModal = () => this.tokensActions.hideDeleteUserTokenModal();

  @dispatch()
  deleteUserToken = () => this.tokensActions.deleteUserToken();

}
