import { Navigate, Outlet, RouteObject } from 'react-router-dom';
import { NavigationManager } from 'src/components/NavigationManager';
import New from 'src/components/New';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to={'/login'} replace />,
      },
      {
        path: '/login',
        element: <New />,
      },
    ],
  },
];
