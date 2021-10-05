import { InputProps, InputVariants } from 'types/elements/Input';
import UnderlinedInput from './UnderlinedInput';

const Input = ({ variant, ...props }: InputProps): JSX.Element => {
  return (
    <>
      {variant === InputVariants.UnderlinedInput && (
        <UnderlinedInput {...props} />
      )}
    </>
  );
};

export default Input;
