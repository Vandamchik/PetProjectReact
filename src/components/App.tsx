import { FC, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { publicRoutes } from '../routes.tsx';
import { useAppDispatch} from "../store/storeHooks/redux.ts";
import { fetchCheckAuthCreator } from '../store/reducers/authorization/creator/fetchCheckAuthCreator.ts';


const routerPublic = createBrowserRouter(publicRoutes);

export const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      dispatch(fetchCheckAuthCreator())
    }
  }, [ dispatch ])

  return <RouterProvider router={routerPublic} />
}

