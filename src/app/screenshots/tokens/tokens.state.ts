export const tokensState: TokensState = {
  isFetchingUserTokens: false,
  isAddingUserToken: false,
  isDeletingUserToken: false,
  showAddUserTokenModal: false,
  showDeleteUserTokenModel: false,
  addingToken: '',
  deletingToken: null,
  tokens: []
};

export interface TokensState {
  isFetchingUserTokens: boolean;
  isAddingUserToken: boolean;
  isDeletingUserToken: boolean;
  showAddUserTokenModal: boolean;
  showDeleteUserTokenModel: boolean;
  addingToken: string;
  deletingToken: Token;
  tokens: Token[]
}

export interface Token {
  id: string;
  created: string;
}
