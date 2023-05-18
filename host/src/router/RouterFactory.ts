import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import { routes } from './routes';

export type RoutingStrategy = 'memory' | 'browser';

interface CreateRouterInterface {
  strategy?: RoutingStrategy;
  initialPathName?: string;
}

export function createRouter({
  strategy,
  initialPathName,
}: CreateRouterInterface) {
  if (strategy === 'browser') {
    return createBrowserRouter(routes);
  }

  const initialEntries = [initialPathName || '/'];
  return createMemoryRouter(routes, { initialEntries: initialEntries });
}
