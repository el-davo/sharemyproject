import {environment} from '../../environments/environment';

const urlsEnv = {
  development: {
    apiUrl: 'http://localhost:3000/api',
    authUrl: 'http://localhost:3000'
  },
  production: {
    apiUrl: 'https:///linkcouch-backend.cfapps.io/api',
    authUrl: 'https:///linkcouch-backend.cfapps.io'
  }
};

export const urls = urlsEnv[environment.production ? 'production' : 'development'];
