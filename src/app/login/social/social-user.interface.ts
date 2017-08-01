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
  photos: Photo[];
}

interface Photo {
  value: string;
}

