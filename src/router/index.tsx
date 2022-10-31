import { Auth as ProviderAuth, Hub } from 'aws-amplify';
import { useEffect } from 'react';
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom';
import {
  AddService,
  Auth,
  Chat,
  ConsultantProfile,
  ConsultantRegister,
  Home,
  Payment,
  SearchPage,
  Service,
  UserProfile,
  VideoChat,
} from '../pages';
import { AuthService } from '../services';
import { useAppDispatch } from '../shared/hooks';
import { saveUser } from '../store/actions';

const ProtectedRoute = ({ children }: any) => {
  const user = AuthService.getCurrentAuthenticatedUser();
  if (!user) {
    return <Navigate to="/landing" replace={true} />;
  }
  return children;
};

const Routes = () => {
  return useRoutes([
    {
      path: '/add-service',
      element: (
        <ProtectedRoute>
          <AddService />
        </ProtectedRoute>
      ),
    },
    { path: '/', element: <Home /> },
    { path: '/consultant/:consultantId', element: <ConsultantProfile /> },
    { path: '/consultant/register', element: <ConsultantRegister /> },
    { path: '/service/:serviceId', element: <Service /> },
    { path: '/search', element: <SearchPage /> },
    { path: '/auth/:authForm', element: <Auth /> },
    { path: 'video', element: <VideoChat /> },
    { path: '/chat', element: <Chat /> },
    { path: '/payment', element: <Payment /> },
    { path: '/userprofile', element: <UserProfile /> },
  ]);
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
      <Routes />
    </BrowserRouter>
  );
};

export { Router };
