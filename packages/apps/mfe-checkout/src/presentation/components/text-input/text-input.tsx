import { ChangeEvent, useState } from 'react';

import masks, { IMagicMasksNames } from 'magic-masks';

import { Container, Input, Label } from './text-input.style';

type TextInputProps = {
  label: string;
  name: string;
  mask?: IMagicMasksNames;
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    maskedValue?: string
  ) => void;
};

export const TextInput = ({
  label,
  name,
  mask,
  onChange,
}: TextInputProps): JSX.Element => {
  const [value, setValue] = useState<string>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    const maskedValue = masks[mask](target.value);

    setValue(maskedValue);

    onChange(event, maskedValue);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        name={name}
        value={value}
        onChange={mask ? handleChange : onChange}
      />
    </Container>
  );
};
