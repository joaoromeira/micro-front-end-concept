/* eslint-disable @typescript-eslint/no-var-requires */
import { Suspense, useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { mount } from 'creditCard/CreditCard';

export const CreditCard = () => {
  const containerRef = useRef();

  useEffect(() => {
    mount(containerRef.current);
  });

  return (
    <Suspense fallback="loading">
      <div ref={containerRef} />
    </Suspense>
  );
};
