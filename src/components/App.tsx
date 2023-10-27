import { FC, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { publicRoutes } from '../routes.tsx';
import { useAppDispatch, useAppSelector } from "../store/storeHooks/redux.ts";
import { fetchCheckAuthCreator } from '../store/reducers/authorization/creator/fetchCheckAuthCreator.ts';


const routerPublic = createBrowserRouter(publicRoutes);

export const App: FC = () => {
  const { isLogin, user } = useAppSelector(state => state.authenticationReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      dispatch(fetchCheckAuthCreator())
    }
  }, [])

  console.log("App",isLogin);
  console.log('UserEmail', user?.user.email)

  return <RouterProvider router={routerPublic} />
}

