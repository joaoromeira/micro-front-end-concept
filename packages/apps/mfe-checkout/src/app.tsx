import React from 'react';

import { createRoot } from 'react-dom/client';

import { Home } from './presentation/pages/home/home';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
