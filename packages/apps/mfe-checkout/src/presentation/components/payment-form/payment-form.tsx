import { ChangeEvent, useState } from 'react';

import { CreditCard, CreditCardPros } from '../credit-card/credit-card';
import { TextInput } from '../text-input/text-input';
import { Title } from '../title/title';
import { Container, Content, Form } from './payment-form.style';
// Extending the credit card props
type FormState = CreditCardPros;

export const PaymentForm = (): JSX.Element => {
  const [form, setForm] = useState<FormState>({
    name: 'Name',
    number: '0000.0000.0000.0000',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>, maskedValue) => {
    const { name, value } = event.target as HTMLInputElement;

    /**
     * This is not the best way to build our state of form
     */
    setForm((currentForm) => ({
      ...currentForm,
      [name]: maskedValue || value,
    }));
  };

  return (
    <Container>
      <Content>
        <Title text="Payment form" />
        <CreditCard {...form} />
        <Form>
          <TextInput name="name" label="Name" onChange={handleChange} />
          <TextInput
            name="number"
            label="Credit Card Number"
            mask="creditCard"
            onChange={handleChange}
          />
        </Form>
      </Content>
    </Container>
  );
};
