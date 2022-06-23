import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { About, ConsultantProfile, Home } from '../pages';
import { Service } from '../pages/Service';

const App = () => {
  let routes = useRoutes([
    { path: '/about', element: <About /> },
    { path: '/', element: <Home /> },
    { path: '/profile', element: <ConsultantProfile /> },
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
