import {environment} from '../../environments/environment';

const urlsEnv = {
  development: {
    apiUrl: 'http://localhost:3001'
  },
  production: {
    apiUrl: 'https://sharemyproject-backend.cfapps.io/api'
  }
};

export const urls = urlsEnv[environment.production ? 'production' : 'development'];
