import { createApp, h } from 'vue';

import CreditCard from './components/credit-card';

export const mount = (el, props) => {
  const app = createApp({
    render: () => h(CreditCard, props),
  });
  app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
  mount('#app');
}
