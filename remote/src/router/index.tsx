import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';
import Button from 'src/components/Button';
import New from 'src/components/New';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Navigate to={'/login'} replace />} />
      <Route path="/login" element={<Button />} />
      <Route path="/new" element={<New />} />
    </Route>
  )
);

export default router;
