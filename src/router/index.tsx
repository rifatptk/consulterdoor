import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { About, AddPeople, ViewPeople } from '../pages';

const App = () => {
  let routes = useRoutes([
    { path: '/about', element: <About /> },
    { path: '/', element: <ViewPeople /> },
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
