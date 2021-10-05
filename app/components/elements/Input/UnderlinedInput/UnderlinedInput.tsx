import { UnderlinedInputProps } from 'types/elements/Input';
import styles from './styles.module.css';

const Input: React.FC<UnderlinedInputProps> = ({
  type = 'text',
  name,
  label,
  required = false,
  min,
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder="dummy"
        required={required}
        {...(min ? { min } : {})}
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Input;
