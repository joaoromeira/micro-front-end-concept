import { CreditCard } from './credit-card';

export const PaymentForm = (): JSX.Element => {
  return (
    <div>
      <div>Payment form</div>
      <CreditCard />
      <label htmlFor="">
        <div>Name</div>
        <input />
      </label>
    </div>
  );
};
