import {TokensState, tokensState} from './tokens.state';
import {TokensActions} from './tokens.actions';

export const tokensReducer = (state: TokensState = tokensState, action: any): TokensState => {
  switch (action.type) {
    case TokensActions.SHOW_ADD_USER_TOKEN_MODAL:
      return {...state, showAddUserTokenModal: true};
    case TokensActions.SHOW_DELETE_USER_TOKEN_MODAL:
      return {...state, showDeleteUserTokenModel: true};
    case TokensActions.HIDE_ADD_USER_TOKEN_MODAL:
      return {...state, showAddUserTokenModal: false};
    case TokensActions.HIDE_DELETE_USER_TOKEN_MODAL:
      return {...state, showDeleteUserTokenModel: false};
    case TokensActions.FETCH_USER_TOKENS:
      return {...state, isFetchingUserTokens: true};
    case TokensActions.FETCH_USER_TOKENS_SUCCESS:
      return {...state, isFetchingUserTokens: false, tokens: action.tokens};
    case TokensActions.FETCH_USER_TOKENS_FAIL:
      return {...state, isFetchingUserTokens: false};
    case TokensActions.ADD_USER_TOKEN:
      return {...state, isAddingUserToken: true};
    case TokensActions.ADD_USER_TOKEN_SUCCESS:
      return {...state, isAddingUserToken: false, tokens: [...state.tokens, action.token]};
    case TokensActions.ADD_USER_TOKEN_FAIL:
      return {...state, isAddingUserToken: false};
    case TokensActions.DELETE_USER_TOKEN:
      return {...state, isDeletingUserToken: true};
    case TokensActions.DELETE_USER_TOKEN_SUCCESS:
      return {
        ...state,
        isDeletingUserToken: false,
        tokens: state.tokens.filter((token) => token.id !== action.token.id)
      };
    case TokensActions.DELETE_USER_TOKEN_FAIL:
      return {...state, isDeletingUserToken: false};
    default:
      return state;
  }
};
