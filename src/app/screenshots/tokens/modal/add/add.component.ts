import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {TokensState} from '../../tokens.state';
import {TokensActions} from '../../tokens.actions';

@Component({
  selector: 'app-add-screenshots-token-modal',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @select('tokens') readonly tokens$: Observable<TokensState>;

  constructor(private  tokensActions: TokensActions) {
  }

  @dispatch()
  hideAddUserTokenModal = () => this.tokensActions.hideAddUserTokenModal();

  @dispatch()
  addUserToken = () => this.tokensActions.addUserToken();

}
