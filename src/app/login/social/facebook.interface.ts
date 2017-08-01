import {Identity} from './social-user.interface';

export interface FacebookIdentity extends Identity {
  profile: Profile;
  name: Name;
  gender: string;
}

interface Profile {
  id: string;
}

interface Name {
  familyName: string;
  givenName: string;
}

