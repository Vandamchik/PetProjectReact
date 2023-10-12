import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { publicRoutes } from './routes.tsx';


const routerPublic = createBrowserRouter(publicRoutes)

export const App: React.FC = () => {
  return <RouterProvider router={routerPublic} />
}

