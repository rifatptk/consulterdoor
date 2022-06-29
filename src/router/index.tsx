import { BrowserRouter, useRoutes } from 'react-router-dom';
import { About, ConsultantProfile, Home, SearchPage, Service } from '../pages';

const App = () => {
  const routes = useRoutes([
    { path: '/about', element: <About /> },
    { path: '/', element: <Home /> },
    { path: '/profile', element: <ConsultantProfile /> },
    { path: '/search', element: <SearchPage /> },
    { path: '/service', element: <Service /> }
  ]);
  return routes;
};

const Router = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export { Router };
