import {Identity, SocialUser} from './social/social-user.interface';

export const loginState: LoginState = {
  isLoggingIn: true,
  isLoggingOut: false,
  isLoggedIn: false,
  hasLoginFailed: false,
  userData: {
    user: null,
    identity: null
  },
  auth: null
};

export interface LoginState {
  isLoggingIn: boolean;
  isLoggingOut: boolean;
  isLoggedIn: boolean;
  hasLoginFailed: boolean;
  userData: SocialUser<Identity>;
  auth: Auth;
}

export interface Auth {
  access_token: string;
}
