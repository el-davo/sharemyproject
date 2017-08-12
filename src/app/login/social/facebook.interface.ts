import {Identity} from './social-user.interface';

export interface FacebookIdentity extends Identity {
  profile: Profile;
  gender: string;
}

interface Profile {
  id: string;
  photos: Photo[],
  name: Name;
}

interface Name {
  familyName: string;
  givenName: string;
}

interface Photo {
  value: string;
}
