import {environment} from '../../environments/environment';

const urlsEnv = {
  development: {
    apiUrl: 'http://localhost:3000/api',
    authUrl: 'http://localhost:3000'
  },
  production: {
    apiUrl: 'https://sharemyproject-backend.cfapps.io/api',
    authUrl: 'https://sharemyproject-backend.cfapps.io'
  }
};

export const urls = urlsEnv[environment.production ? 'production' : 'development'];
