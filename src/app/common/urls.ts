import {environment} from '../../environments/environment';

const urlsEnv = {
  development: {
    apiUrl: 'http://localhost:3000/api',
    authUrl: 'http://localhost:3000',
    screenshotsTokensApi: 'http://localhost:3001'
  },
  production: {
    apiUrl: 'https:///linkcouch-backend.cfapps.io/api',
    authUrl: 'https:///linkcouch-backend.cfapps.io',
    screenshotsTokensApi: 'https://linkcouch-screenshots-backend.cfapps.io/api'
  }
};

export const urls = urlsEnv[environment.production ? 'production' : 'development'];
