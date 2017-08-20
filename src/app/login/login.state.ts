import {Identity, SocialUser} from './social/social-user.interface';

export const loginState: LoginState = {
  showLoginModal: false,
  isLoggingIn: true,
  isLoggingOut: false,
  isLoggedIn: false,
  hasLoginFailed: false,
  showLogoutModal: false,
  userData: {
    user: null,
    identity: null
  },
  auth: null
};

export interface LoginState {
  showLoginModal: boolean;
  isLoggingIn: boolean;
  isLoggingOut: boolean;
  isLoggedIn: boolean;
  hasLoginFailed: boolean;
  showLogoutModal: boolean;
  userData: SocialUser<Identity>;
  auth: Auth;
}

export interface Auth {
  access_token: string;
}
