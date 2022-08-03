// import { Auth } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import axios from 'axios';
import { Logger } from '.';
import config from '../env.json';

const http = axios.create({
  baseURL: config.baseURL,
  timeout: config.timeout,
});

// const sessionCheck = () => {
//   AuthService.getCurrentAuthenticatedUser().catch((err: any) => {
//     Logger.error('getCurrentAuthenticatedUser', err);
//     // window.location.reload();
//   });
// };

// http.interceptors.request.use((config) => {
//   return Auth.currentSession()
//     .then((session: any) => {
//       if (!session) {
//         // sessionCheck();
//         return Promise.reject(config);
//       }
//       if (config && config.headers) {
//         config.headers.Authorization = session.idToken.jwtToken;
//       }
//       return Promise.resolve(config);
//     })
//     .catch((error: any) => {
//       Logger.error('http request', error);
//       sessionCheck();
//       return Promise.reject(error);
//     });
// });

http.interceptors.request.use(
  (request) => {
    return Auth.currentSession()
      .then((session) => {
        if (request && request.headers) {
          request.headers.Authorization = session.getIdToken().getJwtToken();
        }
        Logger.info(`http request`, request);
        return request;
      })
      .catch((error) => {
        Logger.error('http request', error);
        return Promise.resolve(request);
      });
  },
  (error) => {
    Logger.error(`http request`, error);
    return Promise.reject(error.response);
  }
);

http.interceptors.response.use(undefined, (error) => {
  console.log('ERROR', error);
  return Promise.reject(error.response);
});

export { http };
