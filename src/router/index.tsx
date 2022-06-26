import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { About, ConsultantProfile, Home, SearchPage } from '../pages';

const App = () => {
  let routes = useRoutes([
    { path: '/about', element: <About /> },
    { path: '/', element: <Home /> },
    { path: '/profile', element: <ConsultantProfile /> },
    { path: '/search', element: <SearchPage /> },
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
