import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RoutingStrategy, createRouter } from './router/RouterFactory';

const mount = ({
  mountPoint,
  initialPathName,
  routingStrategy,
}: {
  mountPoint: HTMLElement;
  initialPathName?: string;
  routingStrategy?: RoutingStrategy;
}) => {
  const router = createRouter({ strategy: routingStrategy, initialPathName });
  const root = createRoot(mountPoint);
  root.render(<RouterProvider router={router} />);

  return () => queueMicrotask(() => root.unmount());
};

export { mount };
