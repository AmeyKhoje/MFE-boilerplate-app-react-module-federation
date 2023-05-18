import { Suspense, lazy } from 'react';
import { NavLink, Navigate, Outlet, RouteObject } from 'react-router-dom';
import { NavigationManager } from 'src/components/NavigationManager';
// import Login from 'login/Login';

const Login = lazy(() => import('../apps/LoginApp'));
const Opportunity = lazy(() => import('../apps/OpportunityApp'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <div>
        <NavLink to={'/opportunity'}>Opportunity</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={'/login'} replace />,
      },
      {
        path: '/login',
        // lazy: () => import('login/Login'),
        element: (
          <Suspense fallback={'Loading...'}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: '/opportunity',
        // lazy: () => import('login/Login'),
        element: (
          <Suspense fallback={'Loading...'}>
            <Opportunity />
          </Suspense>
        ),
      },
    ],
  },
];
