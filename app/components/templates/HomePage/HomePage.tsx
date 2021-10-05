import Input from '@element/Input';
import { InputVariants } from 'types/elements/Input';
import styles from './HomePage.module.css';

const HomePage = (): JSX.Element => (
  <div className={styles.content}>
    <span className={styles.author}>
      Made by{' '}
      <a href={'https://yannickwittwer.dev'} target="_blank" rel="noreferrer">
        yannickwittwer.dev
      </a>
      <Input
        variant={InputVariants.UnderlinedInput}
        name="Ziyak"
        label="Ziyak"
      />
    </span>
  </div>
);

export default HomePage;
