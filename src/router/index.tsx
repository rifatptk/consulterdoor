import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { About, AddPeople, ViewPeople, ConsultantProfile, Home } from '../pages';

const App = () => {
  let routes = useRoutes([
    { path: '/about', element: <About /> },
    { path: '/', element: <Home /> },
    { path: '/profile', element: <ConsultantProfile /> },
    { path: '/view', element: <ViewPeople /> },
    { path: '/home', element: <AddPeople /> }
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
