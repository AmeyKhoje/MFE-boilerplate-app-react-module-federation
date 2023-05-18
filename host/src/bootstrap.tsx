import { createRoot } from 'react-dom/client';
import App from './App';

const rootNode = document.getElementById('container-app');

if (rootNode) {
  createRoot(rootNode).render(<App />);
}

export {};
