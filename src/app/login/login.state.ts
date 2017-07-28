export const loginState: LoginState = {
  isLoggingIn: false,
  isLoggedIn: false,
  hasLoginFailed: false,
  user: null
};

export interface LoginState {
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  hasLoginFailed: boolean;
  user: User;
}

export interface User {
  uid: string;
  username: string;
}
