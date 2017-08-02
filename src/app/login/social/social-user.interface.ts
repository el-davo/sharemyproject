export interface SocialUser<T> {
  user: User;
  identity: T;
}

interface User {
  username: string;
  id: string;
}

export interface Identity {
  provider: string;
  authScheme: string;
  externalId: string;
}

interface Photo {
  value: string;
}

