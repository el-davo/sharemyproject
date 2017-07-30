export const loginState: LoginState = {
  isLoggingIn: false,
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
  isLoggedIn: boolean;
  hasLoginFailed: boolean;
  userData: UserData;
  auth: Auth;
}

export interface UserData {
  user: User;
  identity: Identity;
}

export interface User {
  username: string;
  id: string;
}

export interface Identity {
  provider: string;
  authScheme: string;
  externalId: string;
  profile: Profile;
  name: Name;
  gender: string;
  photos: Photo[];
}

interface Profile {
  id: string;
}

interface Name {
  familyName: string;
  givenName: string;
}

interface Photo {
  value: string;
}

export interface Auth {
  access_token: string;
}
