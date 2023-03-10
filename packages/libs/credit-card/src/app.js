import { createApp } from 'vue';

import CreditCard from './components/credit-card';

export const mount = (el) => {
  const app = createApp(CreditCard);
  app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
  mount('#app');
}
