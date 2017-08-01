import {Identity} from './social-user.interface';

export interface GithubIdentity extends Identity {
  profile: Profile;
}

interface Profile {
  id: string;
  displayName: string;
  username: string;
  profileUrl: string;
  provider: string;
}
