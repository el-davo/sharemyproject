export const tokensState: TokensState = {
  isFetchingUserTokens: false,
  isAddingUserToken: false,
  isDeletingUserToken: false,
  showAddUserTokenModal: false,
  showDeleteUserTokenModel: false,
  addingToken: {
    name: ''
  },
  deletingToken: null,
  tokens: []
};

export interface TokensState {
  isFetchingUserTokens: boolean;
  isAddingUserToken: boolean;
  isDeletingUserToken: boolean;
  showAddUserTokenModal: boolean;
  showDeleteUserTokenModel: boolean;
  addingToken: Token;
  deletingToken: Token;
  tokens: Token[]
}

export interface Token {
  id?: string;
  token?: string;
  name: string;
  created?: string;
}
