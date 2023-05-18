import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Button from 'src/components/Button';
import { routes } from './routes';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path={'/'}>
//       <Route path="/" element={<Navigate to={'/login'} replace />} />
//       <Route path={'/login'} lazy={() => import('login/Login')} />
//       <Route
//         path={'/opportunity'}
//         element={<Button />}
//         // lazy={() => import('opportunity/Opportunity')}
//       />
//     </Route>
//   )
// );

const router = createBrowserRouter(routes);

const Router = () => <RouterProvider router={router} />;

export default Router;
