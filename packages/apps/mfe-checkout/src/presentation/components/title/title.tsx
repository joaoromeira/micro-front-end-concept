import { Container } from './title.style';

type TitleProps = {
  text: string;
};

export const Title = ({ text }: TitleProps): JSX.Element => {
  return <Container>{text}</Container>;
};
