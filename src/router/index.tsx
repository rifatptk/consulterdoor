import { Auth as ProviderAuth, Hub } from 'aws-amplify';
import { useEffect } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import {
  About,
  Auth,
  ConsultantProfile,
  ConsultantRegister,
  Home,
  SearchPage,
  Service,
} from '../pages';
import { useAppDispatch } from '../shared/hooks';
import { saveUser } from '../store/actions';

const App = () => {
  const routes = useRoutes([
    { path: '/about', element: <About /> },
    { path: '/', element: <Home /> },
    { path: '/consultant/:consultantId', element: <ConsultantProfile /> },
    { path: '/consultant/register', element: <ConsultantRegister /> },
    { path: '/service/:serviceId', element: <Service /> },
    { path: '/search', element: <SearchPage /> },
    { path: '/auth/:authForm', element: <Auth /> },
  ]);
  return routes;
};

const Router = () => {
  const dispatch = useAppDispatch();

  const saveCurrentUser = () => {
    ProviderAuth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then((user) => {
        dispatch(saveUser(user));
      })
      .catch((err) => {
        dispatch(saveUser(null));
      });
  };

  const AuthListener = (data: any) => {
    switch (data.payload.event) {
      case 'signIn':
        saveCurrentUser();
        break;
      case 'signUp':
        // console.log('user signed up');
        break;
      case 'signOut':
        // console.log('user signed out');
        break;
      case 'signIn_failure':
        // console.log('user sign in failed');
        break;
      case 'tokenRefresh':
        // console.log('token refresh succeeded');
        break;
      case 'tokenRefresh_failure':
        // console.log('token refresh failed');
        break;
      case 'configured':
      // console.log('the Auth module is configured');
    }
  };

  useEffect(() => {
    Hub.listen('auth', AuthListener);
    saveCurrentUser();
  }, []);

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export { Router };
