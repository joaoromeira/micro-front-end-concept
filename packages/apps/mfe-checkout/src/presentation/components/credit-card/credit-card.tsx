/* eslint-disable @typescript-eslint/no-var-requires */
import { Suspense, useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { mount } from 'creditCard/CreditCard';

import { Container } from './credit-card.style';

export type CreditCardPros = {
  name: string;
  number: string;
};

export const CreditCard = (props: CreditCardPros) => {
  const containerRef = useRef();

  useEffect(() => {
    mount(containerRef.current, props);
  }, [props]);

  return (
    <Suspense fallback="loading...">
      <Container>
        <div ref={containerRef} />
      </Container>
    </Suspense>
  );
};
