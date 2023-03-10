import React from 'react';

import { createRoot } from 'react-dom/client';

import { PaymentForm } from './presentation/components/payment-form';
const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <PaymentForm />
  </React.StrictMode>
);
